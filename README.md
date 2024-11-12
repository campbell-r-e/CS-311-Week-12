# CS-311-Week-12
Week 12 Assignment.
#Assignemnt Directions. 
Learning Objectives

Create methods for inserting, updating, and deleting content in an application using a database
Process

Starting from the prior lab
Create a subfolder in the app directory for 'videos'
In this folder make a subfolder called 'video'
In the video folder, make two more folders: (add and delete)
Make one more folder  with a subfolder: edit\[slug]
In each of these folders, make a page.tsx file
In the videos page - query for all the videos and list them out
Each video should link to the individual video's page and also have a link to delete it
The link should be contained within a form action
The form action should delete from that page
In the add page
Create a form with all the necessary fields for the video (name, genre, pubdate..)
Have the form submit to an async function on the page that adds the video
This function should then redirect to the videos page
In the edit page, query for the entry related to the slug ID
Populate a form similar to the add page with the data from the query result
This form should submit to a page that updates the record related with the ID with the new information put in the form
Submit

A link to your code running on a host
A link to your code on github
