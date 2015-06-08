# apigee-sample
This repository contains the apigee proxy samples which i created to test/understand the apigee enterprise cloud proxy.


This sample will talk to the backend meetup api to retrieve the list of open events in any place ordered by nearest date.

For example http://....../v1/meetups will get translated to 
https://api.meetup.com/2/open_events.xml

To know more about the meetup api which i used, refer to the below page
http://www.meetup.com/meetup_api/docs/2/open_events/


This sample has been hosted in free public apigee cloud instance. Below are the sample urls to test: (200 success response from meetup api)
http://apigee2k15-prod.apigee.net/v1/meetups?country=in&city=chennai&topic=java
http://apigee2k15-test.apigee.net/v1/meetups?country=GB&city=London&topic=java
