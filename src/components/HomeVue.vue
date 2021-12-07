<template>
  <div class="body-home text-light">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-8 mt-5" style="padding-right: 100px;">
          
          <h1>I am ...</h1>
          <p>
            J.L.M.G Asanka Madhushan Gamage and a theard-year undergraduate at the Sri Lanka Institute of
            Information Technology (SLIIT).
          </p>
          <button class="btn btn-primary" type="button" @click="submit()" style="margin-top:100px" >Download CV</button>
        </div>
        <div class="col-md-4">
          <img
            id="profImg"
            class="rounded-circle overflow-hidden"
            src="../assets/aa.jpg"
            style="width: 350px; margin-top: 100px;"
            alt="pro pic"
          />
        </div>
      </div>
    </div>
    <!--  ---------------------------------------------------------------------------------------------->

      
      <div class="SocialMediaIcons" style="margin-left:100px;">



      <link rel="stylesheet" href="https://cdnjs.cloudfiare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

       <div class="wrapper">

         

          <div class="button"> 
             <div class="icon" > 
            
               <i class="fab fa-github"></i>

            </div> <a href="https://github.com/asankagamage98" target="_blank">

            <span>GitHub</span> </a>

         </div>

         

         <div class="button">

            <div class="icon">

               <i class="fab fa-linkedin"></i>

            </div>  <a href="https://www.linkedin.com/in/asanka-gamage-3816211a0/" target="_blank">

            <span>  Linkedin </span> </a>

         </div>

         

           <div class="button">

            <div class="icon">

               <i class="fab fa-twitter"></i>

            </div> <a href="https://twitter.com/asankagamage98" target="_blank">

            <span>Twitter</span> </a>

         </div>

         

         <div class="button">

            <div class="icon" >

               <i class="fab fa-facebook-f"></i>

            </div> <a href="https://www.facebook.com/profile.php?id=100008554757007" target="_blank">

            <span>Facebook</span> </a>

         </div>

         

         

         <div class="button">

            <div class="icon">

               <i class="fab fa-instagram"></i>

            </div> <a href="https://www.instagram.com/asankamadushan4666/" target="_blank">

            <span>Instagram</span> </a>

         </div>
         

             <div class="button">

                <div class="icon">

                   <i class="fab fa-youtube" ></i>

                </div> <a href="https://www.youtube.com/" target="_blank">

                <span>YouTube</span> </a>

             </div>

      </div>

  </div>
    </div>
</template>

<script>
export default {





methods : {
  
        submit() {
                swal("Succesfully Download","downloading your cv", "success", {
                    button: "Got It!"
                });
                window.open("https://drive.google.com/u/1/uc?id=0B0Y9CJwqLs1MQ3RiR3NIWGVSTkk&export=download");



                 
        }

}

};
 
 
  
</script>

<>

<style scoped>


.body-home {
  min-height: calc(100vh - 56px);
  background-size: cover;
  background-image: url("../assets/bg1.jpg");
}

.over-filtering {

}
* Social ICONS */

.SocialMediaIcons {
    margin-left:50px;
    margin-top:80px;
}
.icon{
  background-color:#171515;
}
.wrapper .button{
  display: inline-block;
  height: 60px;
  width: 60px;
  float:left;
  margin: 0 5px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease-out;
}
.wrapper .button:hover{
  width: 200px;
}
.wrapper .button .icon{
  display: inline-block;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50px;
  box-sizing: border-box;
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.wrapper .button:nth-child(1):hover .icon{
  background: #171515;
}
.wrapper .button:nth-child(2):hover .icon{
  background: #0077b5;
}
.wrapper .button:nth-child(3):hover .icon{
  background: #00acee;
}
.wrapper .button:nth-child(4):hover .icon{
  background: #3b5998;
}
.wrapper .button:nth-child(5):hover .icon{
  background: #8a3ab9;
}

.wrapper .button:nth-child(6):hover .icon{
  background: #ff0000;
}

.wrapper .button .icon i{
  font-size: 25px;
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.wrapper .button:hover .icon i{
  color: #fff;
}
.wrapper .button span{
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  margin-left: 10px;
  transition: all 0.3s ease-out;
}
.wrapper .button:nth-child(1) span{
  color: #171515;
}
.wrapper .button:nth-child(2) span{
  color: #0077b5;
}
.wrapper .button:nth-child(3) span{
  color: #00acee;
}
.wrapper .button:nth-child(4) span{
  color: #3b5998;
}
.wrapper .button:nth-child(5) span{
  color: #8a3ab9;
}

.wrapper .button:nth-child(6) span{
  color: #ff0000;
}



</style>