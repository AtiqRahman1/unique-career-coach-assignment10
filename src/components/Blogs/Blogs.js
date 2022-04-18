import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Q. Difference between authorization and authentication.</h2>
            <p> <span className='text-primary'>Answer:</span>  In authentication process,users identity are checked for providing the access to the system,while in authorization process,user's authorities are checked for accessing the resources.Authentication users are verified but authorization users are validated.Authentication is done before the authorization process, on the other hand,authorization is done after the authentication process.Authentication needs usually user's login details, whereas authentication needs user's security levels.</p>

            <h2>Q.Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><span className='text-primary'>Answer:</span> Using firebase is the most important things for a project, because it is realtime database that lets user build rich,secure access to the database directly from client-side code and while it offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            <p>To implement authentication there are some options available, such as, password-based authentication relies on a username and password or PIN. Two-factor authentication requires users provide at least one additional authentication factor beyond a password.Biometric authentication relies less on an easily stolen secret to verify users own an account.Token authentication enables users to log in to accounts using a physical device.</p>

            <h2>Q. What other services does firebase provide other than authentication?</h2>
            <p><span className='text-primary'>Answer:</span> Firebase is a full package that can help to develop mobile or web applications faster with fewer resources and more efficiency.There are many services which Firebase provides. For example,hosting,cloud storage,google analytics,predictions,cloud firestore,cloud functions,cloud messaging,dynamic links,remote config and so on.Firebase provides authentication services for almost every major platform, which includes Google, Facebook, Twitter, Apple, Github and many more.

            </p>
        </div>
    );
};

export default Blogs;