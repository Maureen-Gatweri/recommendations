const RecommendationSystem = {
    users: [],
  
    addUser: function(userId, preferredItems) {
      this.users.push({ userId, preferredItems });
    },
  
    getRecommendations: function(userId) {
      let user = null;
      this.users.forEach(userData => {
        if (userData.userId === userId) {
          user = userData;
        }
      });
  
      if (user) {
        const userPreferences = user.preferredItems;
        const randomIndex = new Date().getTime() % userPreferences.length;
        return userPreferences[randomIndex];
      } else {
        return "User not found";
      }
    }
  };
  
  // Add users and their preferred items
  RecommendationSystem.addUser("client1", ["dress", "Sneakers", "handbag"]);
  RecommendationSystem.addUser("client2", ["phone", "hoodie", "heels"]);
  
  // Get recommendations for a user
  console.log(RecommendationSystem.getRecommendations("client1"));
  console.log(RecommendationSystem.getRecommendations("client2"));
  console.log(RecommendationSystem.getRecommendations("client3"));
  
  
  
  
  
  
  
  