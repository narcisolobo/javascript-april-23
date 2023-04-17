import happyDog from '../assets/success-dog.jpg';

function Success() {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <img className="img-fluid rounded shadow" src={happyDog} alt="Yay!" />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <h1>Success!</h1>
        <h2>Thank you for submitting your doggo!</h2>
      </div>
    </div>
  );
}

export default Success;
