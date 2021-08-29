
# Glitch Novels
A website to read web novels, build with Spring and Thymeleaf

## Main functionalities

**For unauthenticated users**
- Read novel
- Search with multiple criteria (title, author name, country...)
- View comment, review

**For normal users**
- Modify his/her own profile
- Bookmark novels
- Recieve notification when bookmarked novels have new update
- Write comment
- Interact with others comment, review 

**For curators** (User that have many reaction)
- Write review
- Create curator list that help other discover interesting novel

**For writer**
- Write new novels
- Recieve notification when others post review to his/her own works
- Create, modify, delete his/her own works.

**For manager**
- Recommend novel (These novel'll appear in top banner)
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

