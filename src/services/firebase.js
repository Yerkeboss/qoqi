import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import firebaseConfig from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.storage = app.storage();
    this.db = app.firestore();
    this.auth = app.auth();
  }

  // AUTH ACTIONS ------------

  createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signInWithGoogle = () => this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());

  signInWithFacebook = () => this.auth.signInWithPopup(new app.auth.FacebookAuthProvider());

  signInWithGithub = () => this.auth.signInWithPopup(new app.auth.GithubAuthProvider());

  signOut = () => this.auth.signOut();

  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  addUser = (id, user) => this.db.collection('users').doc(id).set(user);

  getUser = (id) => this.db.collection('users').doc(id).get();

  getUsers = (lastRefKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        if (lastRefKey) {
          try {
            const query = this.db
              .collection('users')
              .orderBy(app.firestore.FieldPath.documentId())
              .startAfter(lastRefKey)
              .limit(12);

            const snapshot = await query.get();
            const users = [];
            snapshot.forEach((doc) => users.push({ id: doc.id, ...doc.data() }));
            const lastKey = snapshot.docs[snapshot.docs.length - 1];

            resolve({ users, lastKey });
          } catch (e) {
            reject(e?.message || ':( Failed to fetch users.');
          }
        } else {
          const timeout = setTimeout(() => {
            didTimeout = true;
            reject(new Error('Request timeout, please try again'));
          }, 15000);

          try {
            const totalQuery = await this.db.collection('users').get();
            const total = totalQuery.docs.length;
            const query = this.db
              .collection('users')
              .orderBy(app.firestore.FieldPath.documentId())
              .limit(12);
            const snapshot = await query.get();

            clearTimeout(timeout);
            if (!didTimeout) {
              const users = [];
              snapshot.forEach((doc) => users.push({ id: doc.id, ...doc.data() }));
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              resolve({ users, lastKey, total });
            }
          } catch (e) {
            if (didTimeout) return;
            reject(e?.message || ':( Failed to fetch users.');
          }
        }
      })();
    });
  };

  passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  changePassword = (currentPassword, newPassword) => new Promise((resolve, reject) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        const user = this.auth.currentUser;
        user
          .updatePassword(newPassword)
          .then(() => {
            resolve('Password updated successfully!');
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });

  reauthenticate = (currentPassword) => {
    const user = this.auth.currentUser;
    const cred = app.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    return user.reauthenticateWithCredential(cred);
  };

  updateEmail = (currentPassword, newEmail) => new Promise((resolve, reject) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        const user = this.auth.currentUser;
        user
          .updateEmail(newEmail)
          .then(() => {
            resolve('Email Successfully updated');
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });

  updateProfile = (id, updates) => this.db.collection('users').doc(id).update(updates);

  onAuthStateChanged = () => new Promise((resolve, reject) => {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Auth State Changed failed'));
      }
    });
  });

  saveBasketItems = (items, userId) => this.db.collection('users').doc(userId).update({ basket: items });

  setAuthPersistence = () => this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL);


  // // EVENT ACTIONS ----------------
  getSingleEvent = (id) => this.db.collection('events').doc(id).get();

  getEvents = (lastRefKeyEvents) => {
    let didTimeoutEvents = false;

    return new Promise((resolve, reject) => {
      (async () => {
        if (lastRefKeyEvents) {
          try {
            const query = this.db
              .collection('events')
              .orderBy(app.firestore.FieldPath.documentId())
              .startAfter(lastRefKeyEvents)
              .limit(12);

            const snapshotEvents = await query.get();
            const events = [];
            snapshotEvents.forEach((doc) => events.push({ id: doc.id, ...doc.data() }));
            const lastKeyEvents = snapshotEvents.docs[snapshotEvents.docs.length - 1];

            resolve({ events, lastKeyEvents });
          } catch (e) {
            reject(e?.message || ':( Failed to fetch events.');
          }
        } else {
          const timeoutEvents = setTimeout(() => {
            didTimeoutEvents = true;
            reject(new Error('Request timeout, please try again'));
          }, 15000);

          try {
            const totalQueryEvents = await this.db.collection('events').get();
            const totalEvents = totalQueryEvents.docs.length;
            const queryEvents = this.db
              .collection('events')
              .orderBy(app.firestore.FieldPath.documentId())
              .limit(12);
            const snapshotEvents = await queryEvents.get();

            clearTimeout(timeoutEvents);
            if (!didTimeoutEvents) {
              const events = [];
              snapshotEvents.forEach((doc) => events.push({ id: doc.id, ...doc.data() }));
              const lastKeyEvents = snapshotEvents.docs[snapshotEvents.docs.length - 1];

              resolve({ events, lastKeyEvents, totalEvents });
            }
          } catch (e) {
            if (didTimeoutEvents) return;
            reject(e?.message || ':( Failed to fetch events.');
          }
        }
      })();
    });
  };

  searchEvents = (searchKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        const eventsRef = this.db.collection('events');

        const timeout = setTimeout(() => {
          didTimeout = true;
          reject(new Error('Request timeout, please try again'));
        }, 15000);

        try {
          const searchedNameRef = eventsRef
            .orderBy('name_lower')
            .where('name_lower', '>=', searchKey)
            .where('name_lower', '<=', `${searchKey}\uf8ff`)
            .limit(12);
          const searchedKeywordsRef = eventsRef
            .orderBy('dateAdded', 'desc')
            .where('keywords', 'array-contains-any', searchKey.split(' '))
            .limit(12);

          // const totalResult = await totalQueryRef.get();
          const nameSnaps = await searchedNameRef.get();
          const keywordsSnaps = await searchedKeywordsRef.get();
          // const total = totalResult.docs.length;

          clearTimeout(timeout);
          if (!didTimeout) {
            const searchedNameEvents = [];
            const searchedKeywordsEvents = [];
            let lastKey = null;

            if (!nameSnaps.empty) {
              nameSnaps.forEach((doc) => {
                searchedNameEvents.push({ id: doc.id, ...doc.data() });
              });
              lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
            }

            if (!keywordsSnaps.empty) {
              keywordsSnaps.forEach((doc) => {
                searchedKeywordsEvents.push({ id: doc.id, ...doc.data() });
              });
            }

            // MERGE PRODUCTS
            const mergedEvents = [
              ...searchedNameEvents,
              ...searchedKeywordsEvents
            ];
            const hash = {};

            mergedEvents.forEach((event) => {
              hash[event.id] = event;
            });

            resolve({ events: Object.values(hash), lastKey });
          }
        } catch (e) {
          if (didTimeout) return;
          reject(e);
        }
      })();
    });
  };

  addEvent = (id, event) => this.db.collection('events').doc(id).set(event);

  generateKeyEvents = () => this.db.collection('events').doc().id;

  storeImageEvents = async (id, folder, imageFile) => {
    const snapshotEvents = await this.storage.ref(folder).child(id).put(imageFile);
    const downloadURL = await snapshotEvents.ref.getDownloadURL();

    return downloadURL;
  };

  deleteImageEvents = (id) => this.storage.ref('events').child(id).delete();

  editEvent = (id, updates) => this.db.collection('events').doc(id).update(updates);

  removeEvent = (id) => this.db.collection('events').doc(id).delete();


  // // PRODUCT ACTIONS --------------

  getSingleProduct = (id) => this.db.collection('products').doc(id).get();

  getProducts = (lastRefKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        if (lastRefKey) {
          try {
            const query = this.db
              .collection('products')
              .orderBy(app.firestore.FieldPath.documentId())
              .startAfter(lastRefKey)
              .limit(12);

            const snapshot = await query.get();
            const products = [];
            snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
            const lastKey = snapshot.docs[snapshot.docs.length - 1];

            resolve({ products, lastKey });
          } catch (e) {
            reject(e?.message || ':( Failed to fetch products.');
          }
        } else {
          const timeout = setTimeout(() => {
            didTimeout = true;
            reject(new Error('Request timeout, please try again'));
          }, 15000);

          try {
            const totalQuery = await this.db.collection('products').get();
            const total = totalQuery.docs.length;
            const query = this.db
              .collection('products')
              .orderBy(app.firestore.FieldPath.documentId())
              .limit(12);
            const snapshot = await query.get();

            clearTimeout(timeout);
            if (!didTimeout) {
              const products = [];
              snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              resolve({ products, lastKey, total });
            }
          } catch (e) {
            if (didTimeout) return;
            reject(e?.message || ':( Failed to fetch products.');
          }
        }
      })();
    });
  };

  searchProducts = (searchKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        const productsRef = this.db.collection('products');

        const timeout = setTimeout(() => {
          didTimeout = true;
          reject(new Error('Request timeout, please try again'));
        }, 15000);

        try {
          const searchedNameRef = productsRef
            .orderBy('name_lower')
            .where('name_lower', '>=', searchKey)
            .where('name_lower', '<=', `${searchKey}\uf8ff`)
            .limit(12);
          const searchedKeywordsRef = productsRef
            .orderBy('dateAdded', 'desc')
            .where('keywords', 'array-contains-any', searchKey.split(' '))
            .limit(12);

          // const totalResult = await totalQueryRef.get();
          const nameSnaps = await searchedNameRef.get();
          const keywordsSnaps = await searchedKeywordsRef.get();
          // const total = totalResult.docs.length;

          clearTimeout(timeout);
          if (!didTimeout) {
            const searchedNameProducts = [];
            const searchedKeywordsProducts = [];
            let lastKey = null;

            if (!nameSnaps.empty) {
              nameSnaps.forEach((doc) => {
                searchedNameProducts.push({ id: doc.id, ...doc.data() });
              });
              lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
            }

            if (!keywordsSnaps.empty) {
              keywordsSnaps.forEach((doc) => {
                searchedKeywordsProducts.push({ id: doc.id, ...doc.data() });
              });
            }

            // MERGE PRODUCTS
            const mergedProducts = [
              ...searchedNameProducts,
              ...searchedKeywordsProducts
            ];
            const hash = {};

            mergedProducts.forEach((product) => {
              hash[product.id] = product;
            });

            resolve({ products: Object.values(hash), lastKey });
          }
        } catch (e) {
          if (didTimeout) return;
          reject(e);
        }
      })();
    });
  };

  getFeaturedProducts = (itemsCount = 12) => this.db
    .collection('products')
    .where('isFeatured', '==', true)
    .limit(itemsCount)
    .get();

  getRecommendedProducts = (itemsCount = 12) => this.db
    .collection('products')
    .where('isRecommended', '==', true)
    .limit(itemsCount)
    .get();

  addProduct = (id, product) => this.db.collection('products').doc(id).set(product);

  generateKey = () => this.db.collection('products').doc().id;

  storeImage = async (id, folder, imageFile) => {
    const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
    const downloadURL = await snapshot.ref.getDownloadURL();

    return downloadURL;
  };

  deleteImage = (id) => this.storage.ref('products').child(id).delete();

  editProduct = (id, updates) => this.db.collection('products').doc(id).update(updates);

  removeProduct = (id) => this.db.collection('products').doc(id).delete();

  // Order

  getSingleOrder = (id) => this.db.collection('orders').doc(id).get();

  getOrders = (lastRefKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        if (lastRefKey) {
          try {
            const query = this.db
              .collection('orders')
              .orderBy(app.firestore.FieldPath.documentId())
              .startAfter(lastRefKey)
              .limit(12);

            const snapshot = await query.get();
            const orders = [];
            snapshot.forEach((doc) => orders.push({ id: doc.id, ...doc.data() }));
            const lastKey = snapshot.docs[snapshot.docs.length - 1];

            resolve({ orders, lastKey });
          } catch (e) {
            reject(e?.message || ':( Failed to fetch orders.');
          }
        } else {
          const timeout = setTimeout(() => {
            didTimeout = true;
            reject(new Error('Request timeout, please try again'));
          }, 15000);

          try {
            const totalQuery = await this.db.collection('orders').get();
            const total = totalQuery.docs.length;
            const query = this.db
              .collection('orders')
              .orderBy(app.firestore.FieldPath.documentId())
              .limit(12);
            const snapshot = await query.get();

            clearTimeout(timeout);
            if (!didTimeout) {
              const orders = [];
              snapshot.forEach((doc) => orders.push({ id: doc.id, ...doc.data() }));
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              resolve({ orders, lastKey, total });
            }
          } catch (e) {
            if (didTimeout) return;
            reject(e?.message || ':( Failed to fetch orders.');
          }
        }
      })();
    });
  };

  addOrder = (id, order) => this.db.collection('orders').doc(id).set(order);

  generateKeyOrder = () => this.db.collection('orders').doc().id;

  // Tender

  getSingleTender = (id) => this.db.collection('tenders').doc(id).get();

  // Croud

  getSingleCroud = (id) => this.db.collection('croud').doc(id).get();

  // Charity
  getSingleCharity = (id) => this.db.collection('charity').doc(id).get();

  // Charity2
  getSingleCharity2 = (id) => this.db.collection('charityAdditional').doc(id).get();

  // Messaging

  getSingleChat = (id) => this.db.collection('chats').doc(id).get();

  sendMessage = async (senderId, receiverId, message) => {
    const messageData = {
      senderId,
      receiverId,
      message,
      timestamp: new Date()
    };
    try {
      await this.db.collection('chats').add(messageData);
      return true;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  };
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
