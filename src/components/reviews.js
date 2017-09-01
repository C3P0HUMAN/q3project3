import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';
import {Field, reduxForm} from 'redux-form';

class Reviews extends Component {
  constructor() {
    super();

    this.state={
      reviews:[]
    }
  }

  componentDidMount(){
    console.log(this.props)
  axios.get(`http://localhost:8000/reviews/${this.props.match.params.game}`).then(res => {
    this.setState(() => {
      console.log("getting data",res.data)
      let newState = {};
      newState.reviews = res.data
      return newState

    })
      console.log("this is state",this.state)
  })
}

addReview(values){
  console.log("this.ref", values)
  axios.post(`http://localhost:8000/reviews/${this.props.match.params.game}`, values)
  this.setState({
    reviews: this.state.reviews.concat(values)
  })
}

  render () {
    const {handleSubmit} = this.props;
    console.log("shizz",this.state.reviews)
    let reviews = this.state.reviews.map(review =>{
      return (<div key={review.review_id}>
          {review.game_title} <br/>
          <img src={review.game_image} height="500px"/> <br/>
          Summary: {review.game_summary} <br/>
          Reviews <hr />
          <div>
<div className="pull-right">
 <p>

 </p>
</div>

<div className="row">
 <div className="col-md-8">
   <form id="newReview" >
     <div>
       <label htmlFor="body">Body</label>
       <Field component="input" type="textarea" name="body" id="body" className="form-control"/>
     </div>
     <div className="form-group">
       <button type="submit" onClick={handleSubmit} className="btn btn-primary">
         Create Post
       </button>
     </div>
   </form>
 </div>
</div>
</div>
           {review.review_text}
        </div>)
    })

    return (
      <div>
      <div className="row">
      <div className="col-md-offset-1">
        <hr/>
        <p>

        <ul>
          <li> {reviews} </li>
        </ul>
        </p>



      </div>
    </div>

      </div>
    )
  }
}



Reviews = reduxForm({form: 'reviews'})(Reviews);

export default Reviews;
