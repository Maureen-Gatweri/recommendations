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
  RecommendationSystem.addUser("user1", ["item1", "item2", "item3"]);
  RecommendationSystem.addUser("user2", ["item4", "item5", "item6"]);
  
  // Get recommendations for a user
  console.log(RecommendationSystem.getRecommendations("user1"));
  console.log(RecommendationSystem.getRecommendations("user2"));
  console.log(RecommendationSystem.getRecommendations("user3"));
  
  
  
  
  
  
  
  