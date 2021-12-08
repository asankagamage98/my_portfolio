<template>
<div class="body-contact">
<div class="bigbox position-absolute top-50 start-50 translate-middle " >
  <div style="color:white; margin-left:50px;">
    <br><h1> Contact Form</h1><br>
  </div>
  <div class="col-md-4">
          <img
            id="profImg"
            class="rounded-circle overflow-hidden imgsrc"
            src="../assets/cont.png"
            alt="pro pic"
          />
        </div>
  <form ref="form" @submit.prevent="sendEmail" style ="margin-left:50px">
    
    <input class="textbox" type="text" name="from_name" placeholder="Name" v-model="name"><br>
     <input class="textbox" type="email" name="from_name" placeholder="Email" v-model="email "><br>
     <textarea class="textbox" name="message" placeholder="Massage" style="height:100px;" v-model="massage"></textarea><br><br>
     <button type="submit" value="Send" class="btn btn-outline-danger">Send Email</button>
    <button @click='resetForm' class="btn btn-outline-success" style="width:110px;">  Clear  </button>  

    <!-- <input type="submit" > -->
  </form>  
  


  <!-- social icon -->
       <div class="SocialMediaIcons" style="margin-left:400px;">



      <link rel="stylesheet" href="https://cdnjs.cloudfiare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

       <div class="wrapper" style="display: flex; flex-direction: row;">

          <div class="button"> 
             <div class="icon"  > 
            
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
</div>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      name:"",
      email: "",
      massage:"",
    };
  },
  methods: {

    //clear method
    resetForm(){
          this.name = ""; 
          this.email ="";
          this.massage ="";

             },


    sendEmail() {
      emailjs.sendForm('service_9an8hox', 'template_ua9cxcq', this.$refs.form, 'user_6GkDUMeDNhKlmcZcGndGd')
        .then((result) => {
            console.log('SUCCESS!', result.text);
                  swal("Success", "Completed !", "success"); 

        }, (error) => {
            console.log('FAILED...', error.text);
              swal("Rejected","Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                });
            
        });
    }
  }
}
</script>
<style scoped>

.textbox {
  height:35px;
  width:450px;
  margin-top:20px;
  margin:20p;
  
}
.body-contact {
  min-height: calc(100vh - 56px);
  background-size: cover;
   background-image: url("../assets/contack_back.jpg");
}
.bigbox {
 background-color:#00000090;
 height:500px;
 width:1000px;
}
.imgsrc {
   width: 360px;
   height:330px;
   margin-top:-5%;
   position:absolute;
   left: 57%;
}

* Social ICONS */

.SocialMediaIcons {
    margin-left:50px;
    margin-top:80px;
}
.icon{
 }
.wrapper .button{
  /* display: inline-block; */
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