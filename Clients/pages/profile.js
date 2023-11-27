// pages/api/profile.js

export default (req, res) => {
    // Supposez que l'utilisateur soit déjà authentifié et que vous ayez accès à ses informations de profil.
    const userProfile = {
      username: 'utilisateur123',
      email: 'utilisateur123@example.com',
    };
  
    res.status(200).json(userProfile);
  };
  