<!-- <img class="ehp_image" src="single_page_images/noize_machine.png"> -->
<span class="ehp_small_header"> Introduction: </span>
<p class="page_section_paragraph"> The senior projects class is a two semester class that is built to allow computer science students to apply the knowledge that they've acquired throughout their college careers towards building a single large project. Each project is completed by a group of six students, which I was elected to be team lead of, and the requirements are set by sponsors of the class. My team's sponsor was the on campus radio station Radio 1190. </p> 

<span class="ehp_small_header"> The Project: </span> 
<p class="page_section_paragraph"> Radio 1190 has been for years using a software called DJ Pro to control their workflow of setlist creation. The software allows DJ set creation, new album insertion, designating top albums, and allowing DJ choice slots. However, DJ Pro is not connected in any way to their music database. The DJ's were using the software as a planner for their set. So, when a DJ needs to play a song they must go and find the song either on their small itunes library or seek out the CD with the song. This is incredibly inefficient and gives the DJ's little time to go search for music as previous songs are playing. DJ's also can't be late to their shift, take a break, or just generally lose track of time. Another problem is for overnight, weekend, and holiday programing the setlists have to be created a head of time. These playlist have to include ads and sweepers for the station to follow FCC regulations. All of these problems are a cause of major headache so our project was to provide a tool that could fill any radio space when a DJ is not present at the station. This tool would allow a DJ to start the tool and then be absent for any amount of time and still have music playing. </p>

<img class="ehp_image" src="single_page_images/dj_pro.png"> 

<span class="ehp_small_header"> Initial Problems: </span>
<p class="page_section_paragraph"> A previous Senior projects had taken on this task and had supposedly finished the backend of the project. This would leave my group to design and implement a front end for the DJ's to interact with. This however was not the case. The code we received from the previous year would not run. We spent several weeks attempting to run the code, but eventually succumbed and decided to write the project over from scratch. This decision was a bit disheartening though overall better for our group in the end. </p>

<span class="ehp_small_header"> Functionality: </span>
<p class="page_section_paragraph"> The final functionality was a web application that creates hour long playlists once a day for the next day. These playlists are generate from a database of songs that reside on the Radio 1190 Servers. On the web page when the play button is pressed the correct playlist is found for that hour and then the song is played which corresponds to the playlist ending as close to the end of the hour as possible. If left alone then the application will continually grab the next playlist every hour and continue on forever. There is a proximity protection alogrithm which I explain below. These playlist also included the appropriate ads and sweepers that are compliant with FCC standards so that the station doesn't have to worry about meeting regulation. Songs that played are also added to a log in case admins wants to check what songs were played and when they were played. Other features that are included are switching music for special shows. This is done by unmounting the normal database and remounting a new folder with music. </p>
<img class="ehp_image" src="single_page_images/final.png">

<span class="ehp_small_header"> Algorithms and implementations: </span>
<p class="page_section_paragraph"> In order to generate playlists that do not continuously play the same artists and songs over and over again our group designed a proximity protection algorithm. We keep a list of recently played artists which the algorithm then uses to create a subset of the database without these artists. Once 70% of the other artists in the database have been played then an artist will be put back into rotation. Songs are selected randomly from the subset to be put into the playlists. After testing the algorithm we have seen that the same artist will not be played in a single week if the application is left to continuous playing.  </p>

<span class="ehp_small_header"> Front End Design: </span>
<p class="page_section_paragraph"> The design of the front end was done completely be me and tweaked over many iterations as I got feedback from the sponsors. The experience of continuously tweaking was very beneficial and probably my favorite part of the project. Below are many of the mockup designs that I went through. </p>
<div class="logo_showcase">
<img class="ehp_small_image" src="single_page_images/mockup1.png">
<img class="ehp_small_image" src="single_page_images/mockup2.png">
<img class="ehp_small_image" src="single_page_images/mockup3.png">
<img class="ehp_small_image" src="single_page_images/mockup4.png">
<img class="ehp_small_image" src="single_page_images/mockup5.png">
<img class="ehp_small_image" src="single_page_images/mockup6.png">
<img class="ehp_small_image" src="single_page_images/mockup7.png">
</div>


<span class="ehp_small_header"> Poster: </span>
<p class="page_section_paragraph"> Poster shown off at the Computer Science Expo.</p>
<img class="ehp_image" src="single_page_images/poster.gif">

<span class="ehp_small_header"> Handout: </span>
<p class="page_section_paragraph"> Handout given out at the Computer Science Expo as an overview of the project. <a class="ehp_download" href="resources/handout.pdf"> Download Handout </a></p>

<span class="ehp_small_header"> Future Plans </span>
<p class="page_section_paragraph"> Currently, our project and DJ Pro are separate programs that don't overlap. In the End Radio 1190 wants to integrate these two pieces of software. This will be next years senior team project. Mockups for the design and tons of documentation have been left to help this team deal with our software as they work with DJ Pro. Hopefully the problems that we encountered at the beginning of our semester can be mitigated for the next team. </p>