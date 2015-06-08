
if(context.proxyResponse.status == 200){

   body =context.proxyResponse.content;
    
    obj = JSON.parse(body);
  
    delete obj.results.head;
  
    if (obj.results.items) {
    if(obj.results.items.item){
        obj.results.items.item.forEach(function(item) {
          item.distance=100;
          
          /*delete the unwanted reponse fields*/
          delete item.announced;
          delete item.announced_at;
          delete item.comment_count;
          delete item.created;
          delete item.description;
          delete item.distance;
          delete item.duration; 
          delete item.email_reminders;
          delete item.event_hosts;
          delete item.event_url;
          delete item.featured;
          delete item.fee;
          delete item.group;
          delete item.headcount;
          delete item.how_to_find_us;
          delete item.id;
          delete item.is_simplehtml;
          delete item.maybe_rsvp_count;
          delete item.photo_album_id;
          delete item.photo_count;
          delete item.photo_url;
          delete item.publish_status;
          delete item.rating;
          delete item.rsvp_alerts;
          delete item.rsvp_limit;
          delete item.rsvp_rules;
          delete item.rsvpable;
          delete item.self;
          delete item.short_link;
          delete item.status;
          delete item.survey_questions;
          delete item.timezone;
          delete item.trending_rank;
          delete item.updated;
          delete item.utc_offset;
          delete item.venue_visibility;
          delete item.visibility;
          delete item.why;
          delete item.yes_rsvp_count;
          delete item.waitlist_count;
       
          /*extract address and city details*/
          if(item.venue){
           item.address = item.venue.address_1;
           item.city=item.venue.city;
          }
          
          /*if not available then set as not available*/
          if(!item.venue){
          item.address="Not available";
          item.city="Not available";
          }
          /*set milliseconds in date format*/
          item.time =new Date(item.time).toString("dd MMM yyyy");
          
          delete item.venue;
        }) 
  	}
    obj.results.event = obj.results.items.item;
  	delete(obj.results.items);
  };

  

    context.proxyResponse.content = JSON.stringify(obj);
}