wrk.method = "POST"
wrk.body = '{"shouldUseCache": true,"shouldSyncData": true,"filterBy": {},"start": 0,"limit": 50}'
wrk.headers["Content-Type"] = "application/json"
wrk.headers["authorization"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJlZ191aSIsInNjb3BlIjoicHJpdmF0ZSIsInBhc3N3b3JkIjoicHdkMTIzIiwiaWF0IjoxNDk5MDY5NzM1LCJleHAiOjE0OTk2NzQ1MzV9.gfTjPlwphvuh8_hSj1yDhh6Y17Xm82q_-EgJLSHkPBg"