
import React, { useState } from 'react';

function TabName (props){
    // let thissingledata = props.singledata
    // console.log(thissingledata.tabName)
    const [data, setData] = useState(props.singledata);
    const [showSub, setshowSub] = useState(false);
    const [showSubclass, setshowSubclass] = useState("fa-chevron-down");
    function activateLasers() {
      if(showSub){
        setshowSub (false);
        setshowSubclass ("fa-chevron-down")
      }else{
        setshowSub (true);
        setshowSubclass ("fa-chevron-up");
      }
    }
    console.log(data)
    return(
        <div className='mb-4 box-foreach shadow'>
            <img className='image-sizing' src={data.fnbtabs_images[0].imageurl} alt="" />
            <i className={"p-3 fa float-end "+ showSubclass} onClick={()=>activateLasers()} aria-hidden="true"></i>
            <h5 className='fw-bold  p-3 text-start'>{data.tabName}</h5>
            <div className={showSub? 'd-block' : 'd-none'}>
            {data.fnbtabs_items.map(item=>{
                return(
                <div key={item.id} className="row mx-2 py-3 border-bottom">
                    <div className="col-md-3">
                        <img className='subcat-image rounded' src={item.fnbs_images[0].imageurl} alt="" />
                    </div>
                    <div className="col-md-9 flex-column d-flex">
                        <h5 className='fw-bold text-start'>{item.itemName}</h5>
                        <p className='text-black-50 text-start'>
                        {item.itemDetails}
                        </p>
                        <div className='text-start text-black-50 mt-auto'>
                        <span className='h5 float-end fw-bold text-end'><i className="fa fa-cart-plus px-3" aria-hidden="true"></i>
                            <button className='btn btn-danger px-4 py-1'>Add +</button>
                            <h6 className='mb-0 text-dark'>To be Picked-up</h6></span>
                        <span className='h5 fw-bold d-inline-block pt-4'>$8.95</span>
                        </div>

                    </div>
                </div>
                )
            })}
            </div>
          </div>
    )
}

export default TabName