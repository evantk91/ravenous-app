

const apiKey = '3w098WjdLgNP9UfBJrLh0Q5MNARWs7AXNb2bDqid9_zHz9rA3_XnelmyDsqkR2KpyjsZNzfRwMS3XFzX58TO-71mLcAjfd1ag6LTCuXHn-vCI9jKQ87JiOU9WNzmXnYx';

const Yelp = {
   search(term, location, sortBy) {
      const CORSAnywhereURL = 'https://cors-anywhere.herokuapp.com/'
      const yelpURL = `${CORSAnywhereURL}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
      
      return fetch(yelpURL, {
         headers: {
            Authorization: `Bearer ${apiKey}`
         }
      }).then(response => {
         return response.json();
      }).then(jsonResponse => {
          if(jsonResponse.businesses) {
             return jsonResponse.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
             }));    
          }
      });
   }
};

export default Yelp;