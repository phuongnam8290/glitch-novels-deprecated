
# Glitch Novels
A website to read web novels, build with Spring and Vue.js

## Main functionalities

**For unauthenticated users**
- Read novels
- Search with multiple criteria (title, author name, country...)
- View comments, reviews

**For normal users**
- Modify his/her own profile
- Bookmark novels
- Recieve notification when bookmarked novels have new update
- Write comments
- Interact with others comments, reviews

**For curators** (User that have many reaction)
- Write reviews
- Create curator's list that help other discover interesting novels

**For writer**
- Write new novels
- Recieve notification when others post review to his/her own works
- Create, modify, delete his/her own works

**For manager**
- Recommend novels (These novels'll appear in top banner)
- Write news

**For administrator**
- Full authority to CRUD user, novel

## Database
MySQL with Hibernate as JPA implementation.
Diagram not yet implemented

## Security
Using Spring Security with these flows:
- OAuth2 with popular authentication provider (Google, Facebook, Twitter)
- Register/login with local account

## Requirements
You need Java 16 installed.

## Demo
Not yet implemented

