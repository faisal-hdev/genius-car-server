/*
1. install jsonwebtoken 
2. jwt.sign (payload, secret, {expressIn:})
3. token client 
*/

/***
 * 1. How to store token in the clint side
 * 2. memory ---> ok type
 * 3. local storage ---> ok type (xss)
 * 4. cookies : http only
 */

/***
 * 1. set cookies with http only : for development secure: false,
 *
 * 2. cors
 * app.use(cors({ origin: ["http://localhost:5173/"], credentials: true }));
 *
 * 3. client side axios setting
 * in axios set withCredential true: true
 *
 */
