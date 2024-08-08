import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { GrNext } from 'react-icons/gr';

const HomePage = () =>{ 
    return(
<div>
<div className="body flex justify-center pt-40 gap-36">
<div>
    <h1 className="font-bold text-5xl">Enjoy Delicious</h1>
    <h1 className="text-5xl font-bold">Food in<span className="text-yellow-500 text-5xl font-bold"> Healthy Life</span></h1> 
    <p className="pt-14 font-mono">Tandoon masala is an Indian space blend consisting of a</p>
    <p className="font-mono">variety of spices Tandoon masala is an Indian spice blend</p>
    <p className="font-mono">consisting of a variety of spaces</p>
   
    <button className="bg-yellow-400 mt-5 p-2 rounded-lg text-white text-sm">ORDER NOW</button>
    </div>
<img src="./images/chicken.png" alt='chicken'/>
</div>

  
<div className="food flex gap-20 justify-center pt-96">
<div>
    <p className="italic">Online Store</p>
    <h1 className="font-bold">Popular Foods</h1>
    </div>
    <div>
    <img src="./images/fry.png"/>
    <h1 className="font-bold text-3xl">Fruit dish</h1>
    <p>Dinko food</p>
    <p className="text-center mt-[20px] mr-48">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-400 mt-5 p-2 rounded-lg text-white text-sm">Add to cart $696</button>
    </div>


    <div>
    <img src="./images/boil.png"/>
    <h1 className="font-bold text-3xl">Fruit dish</h1>
    <p>Danko food</p>
    <p className="text-center mt-[20px] mr-48">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-400 mt-5 p-2 rounded-lg text-white text-sm">Add to cart $696</button>
    </div>

    <div>
    <img src="./images/fry.png"/>
    <h1 className="font-bold text-3xl">Fruit dish</h1>
    <p>Danko food</p>
    <p className="mt-[20px] mr-48">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-400 mt-5 p-2 rounded-lg text-white text-sm">Add to cart $696</button>
    </div>


    <div>
    <img src="./images/boil.png"/>
    <h1 className="font-bold text-3xl">Fruit dish</h1>
    <p>Dinko food</p>
    <p className="text-center mt-[20px] mr-48">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
    <button className="bg-yellow-400 mt-5 p-2 rounded-lg text-white text-sm">Add to cart $696</button>
    </div>

    </div>

    <div className="flex gap-52 pl-28 pt-96 justify-center">

    <div>
    <button className="bg-amber-400 mt-5 p-2 rounded-lg text-white text-sm">-50%</button> 
    <h1 className="font-bold text-5xl">Our Special Offer</h1>
    <p>Best cooks and best delivery guys all at your</p>
    <p>service. Hot tasty food will reach you in 60 minutes.</p>

    <button className="bg-yellow-400 mt-5 p-2 rounded-lg text-white text-sm">See All Menu</button>

    <div>
          <p className="font-bold text-1xl">Cristio Maria</p>
          <p className=" text-[10px] font-light text-zinc-550">Healthy and delicious Pizza</p>
          <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
       </div>

    </div>
    <img src="./images/images.jpeg"alt='images'/>
    </div>

    <div className='justify-center'>
          <p className="font-bold text-1xl">Srah Ali Khan</p>
          <p className=" text-[10px] font-light text-zinc-550">Healthy and delicious Pizza</p>
          <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
       </div>

<div className='pt-80'>
<div className="text-center">
<p>Quality Food</p>
<h2 className="font-bold text-5xl">Get The Best Offers</h2>
<p>The food at your doorstep. Why starve when you have us. You hunger <br></br> partner. Straight out of the oven to your door step.</p>
</div>

<div className="flex items-center justify-center gap-28">
<div>
<h1>Any day <br></br>offers</h1>
<p>New phenomenon<br></br> Burger taste</p>
<p className="text-yellow-500">$12.90</p>
</div>
<div>
<img src="./images/humburger.jpeg"alt='humburger'/>
</div>

<div>
<h1>Other flavors</h1>
<p>Save room. We<br></br> made salats.</p>
<p className="text-yellow-500">$12.90</p> 
</div>
<div> 
<img src="./images/humburger2.jpeg"alt='meat' />
</div>

<div>
<h1>Find a poco<br></br> store near <br></br>you</h1>
</div>
<div>
<img src="./images/map.png"alt='banana'/>
</div>

</div>

</div>

<div className='pt-80'>
<h1 className="font-bold text-5xl text-center">Our Service</h1>

<div className="flex gap-48 justify-center pt-14">
<div>
<img src="./images/restaurant.png "alt='restaurant'width={120}/>
<p className="pt-10 font-semibold">55+ Restaurants</p>
</div>

<div>
<img src="./images/quality.png"alt='quality'width={120}/>
<p className="pt-10 font-semibold">Good Quality</p>
</div>

<div>
<img src="./images/system.png"alt='system'width={120}/>
<p className="pt-10 font-semibold">Discount System</p>
</div>

<div>
<img src="./images/delivery.png"alt='delivery'width={120}/>
<p className="pt-10 font-semibold">Fast Delivery</p>
</div>

</div>

</div>

<div className="text-center pt-36">
<p className="font-bold">Testimonial</p>
<h1 className="font-semibold text-5xl">What Our Clients Say</h1>
<div className='flex justify-center my-8' >
<img src="./images/marks.png "alt='Decorative marks'/>
</div>
<p>Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br></br> uilamco laboris nisi ut aliquip ex ea commodo</p>

<div className="flex justify-center"> 
<img src="./images/manager.png"alt='manager'width={120}/>
<img src="./images/PM.png"alt='pm'width={120}/>
<img src="./images/Devops.png"alt='devops'width={120}/>
<img src="./images/CEO.png"alt='ceo'width={120}/>
<img src="./images/CTO.png"alt='cto'width={120}/>
</div>
<p className='font-bold'>Mitchell Marsh</p>
<p>CEO, Bexon Agency</p>
</div>

<div className="gap-28 flex justify-center">
<div className="pt-72">
<img src="./images/phone.png"alt='phone'/>
</div>

<div className="pt-64">
<p className="text-yellow-500 font-bold">Download Our App</p>
<p className="font-bold text-6xl">It's all here.</p>
<p className="font-bold text-6xl">All in one app.</p><br></br>
<p className="text-indigo-300">Discover local, on-demand delivery or Pickup from<br></br>restaurants. nearby grocery and convenience stores,<br></br>and more</p><br></br>
<div className="flex gap-9">
<img src="./images/app.png"/>
<img src="./images/google.png"/>
</div>

</div>
</div>


<div className="flex gap-80 pl-48 pt-48">
<div>
<h1 className="font-bold text-3xl">Subscribe Our Newsletter</h1>
<p>Subscribe on our newsletter to get our <br></br>news</p>
</div>

<input className="mt-8"placeholder="Your email address" />
      <button className="bg-amber-400 w-32 text-white mt-8 text-[14px]">
        Subscribe<GrNext/></button>
    </div>
    <div className="flex gap-40 text-white bg-black py-8 mt-20">
      <div className="ml-80">
        <h2 className="text-[18px] font-bold">FoodHouse.</h2>
        <p>Best cooks and best delivery guys all<br/> at your service.Hot tasty food will <br/> reach you in 60 minutes.</p>
        <div className="flex gap-10">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaLinkedin />
        </div>
      </div>


<div className="text-white	">
<h1 className="font-bold">Company</h1>
<p>Career</p>
<p>About Us</p>
<p>Blog</p>
<p>Press Info</p>
<p>Features</p>
</div>

<div className="text-white	">
<h1 className="font-bold">Fudo</h1>
<p>Why Fudo</p>
<p>How it Works</p>
<p>Why Choose Us</p>
<p>Client Stories</p>
<p>Gallery</p>
</div>

<div className="text-white	">
<h1 className="font-bold">Menu</h1>
<p>Breakfast</p>
<p>Lunch</p>
<p>Dinner</p>
<p>Fast Foods</p>
<p>Drinks</p>
</div>


</div>

<div className="flex justify-center gap-32 text-white	bg-yellow-500">
<p>Copyright 2021 Besnik All Right Reserved </p>
<p>Terms</p>
<p>Privacy</p>
<p>Security</p>
</div>


</div>
    );
};

export default HomePage;