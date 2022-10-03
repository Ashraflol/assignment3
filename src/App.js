import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TabName from './tabname'
import mydata from './data.json'

// Import Swiper styles
import 'swiper/css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="">
            <h4 className="d-inline-block">
              Non-member <br/> pricing
            </h4>
            {/* <h4 className="d-inline-block">
              pricing
            </h4> */}
            <Form className="d-inline-block form-custom">
              <Form.Check 
                type="switch"
                id="custom-switch"
              />
            </Form>
            <h4 className="d-inline-block">
              <span className='text-danger'>Extras</span> Member <br/> pricing
            </h4>
            {/* <h4 className="d-inline-block">
              pricing
            </h4> */}
        </div>
      </div>
      <div className="pt-4 pb-2 menu-swiper">
      <Swiper
        spaceBetween={10}
        slidesPerView={10}
        modules={[Navigation]}
        observer={true}
        observerParent={true}
        loop={true}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        {mydata.map(item=>{
          return(
            <SwiperSlide key={item.id}><span>{item.tabName}</span></SwiperSlide>
          )
        })}
      </Swiper>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 ">
            {mydata.map(item=>{
              return(
                <TabName key={item.id} singledata={item}></TabName>
              )
            })}
          </div>
          <div className="col-md-4">
            <div className="shadow rounded">
              <h5 className='fw-bold pt-5 pb-3'>Your Cart</h5>
              <h1><i className="fa fa-shopping-cart" aria-hidden="true"></i></h1>
              <h6 className='text-black-50 pb-5 px-5'>Cart is empty. Select a category to add food.</h6>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
