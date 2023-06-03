# Project REST-Rant

REST-Rant is an app where users can review restaurants.
# Project Planning
| Method | Path | Purpose |		
| ------ | ---- | ------- |
| Get | / | Home page |
| Get | /places | Places index page |
| Post | /places | Create new place |
| Get | /places/new | From page for creating a new place |
| Get | /places/:id | Details about a particular place |
| Put | /Places/:id | Update a particular place |
| Get | /places/:id/edit | From page for editing an existing place |
| Delete | /places/:id | Delete a particular place |
| Post | /places/:id/rant | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant:tantld | Delete a rant (comment) about a particular place |
| Get | * | 404 page (Matches any route not defined above) |

## Database

**places** 

| Field | Type |
| ---------- | ------------ |
| _id | Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic | String |