curl -X POST \
  'http://localhost:8080/singlelists?memberUUID=0103F934-42B2-4FD3-9174-63F77517742D&eventType=baby' \
  -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJlZ191aSIsInNjb3BlIjoicHJpdmF0ZSIsInBhc3N3b3JkIjoicHdkMTIzIiwiaWF0IjoxNDk5MDY5NzM1LCJleHAiOjE0OTk2NzQ1MzV9.gfTjPlwphvuh8_hSj1yDhh6Y17Xm82q_-EgJLSHkPBg' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 4a0a19be-4630-f2f0-f3a4-3357e892e856' \
  -d '{
 "shouldUseCache": true,
 "shouldSyncData": true,
 "filterBy": {

	 "priceRangeFilters": [
		 {
			 "isFilter": true,
			 "min": 0,
			 "max": 50
		 },
		 {
			 "isFilter": true,
			 "min": 50,
			 "max": 100
		 },
		 {
			 "isFilter": true,
			 "min": 100,
			 "max": 150
		 },
		 {
			 "isFilter": true,
			 "min": 150,
			 "max": 1000
		 }
	 ],
	 "fulfillFilters": [
		 {
			 "isFilter": true,
			 "fulfilled": true
		 },
		 {
			 "isFilter": true,
			 "fulfilled": false
		 }
	 ]
 },
 "start": 0,
 "limit": 2,
 "trackTypeId": {
	 "buyButtonTrackId": "b0489bcc-326a-42a1-b1d5-2ec7e7644b09",
	 "productViewTrackId": "16e208bf-32fb-473f-91d0-f2428e1e3548",
	 "productManualTrackId": "a2fd123d-31e3-44f9-b82e-f54d77ee2af5",
	 "retailerLogoTrackId": "9a4ded89-74d4-4fda-b0b7-7ac021f5549c"
 }
}'