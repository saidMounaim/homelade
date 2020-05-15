import React from 'react'

const BestProperties = () => {
    return (
        <section className="ftco-section goto-here">
    	<div className="container">
    		<div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
          	<span className="subheading">What we offer</span>
            <h2 className="mb-2">Latest Properties</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4">
        		<div className="property-wrap">
                    <a href="#" 
                    className="img" 
                    style={{ backgroundImage: `url(${window.location.origin}/images/work-1.jpg)` }} ></a>
        			<div className="text">
        				<p className="price"><span className="old-price">800,000</span><span className="orig-price">$3,050<small>/mo</small></span></p>
        				<ul className="property_list">
        					<li><span className="flaticon-bed"></span>3</li>
        					<li><span className="flaticon-bathtub"></span>2</li>
        					<li><span className="flaticon-floor-plan"></span>1,878 sqft</li>
        				</ul>
        				<h3><a href="#">The Blue Sky Home</a></h3>
        				<span className="location">Oakland</span>
        				<a href="#" className="d-flex align-items-center justify-content-center btn-custom">
        					<span className="ion-ios-link"></span>
        				</a>
        			</div>
        		</div>
        	</div>
        </div>
    	</div>
    </section>
    )
}

export default BestProperties
