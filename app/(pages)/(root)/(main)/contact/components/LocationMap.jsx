// components/LocationMap.tsx

const LocationMap = () => {
  return (
    <section className="tp-location__area">
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-location__info-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2803502.0308645153!2d89.16338837780354!3d23.65743155768624!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684146049617!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
