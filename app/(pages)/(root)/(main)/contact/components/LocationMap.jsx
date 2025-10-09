// components/LocationMap.jsx

const LocationMap = () => {
  return (
    <section className="tp-location__area">
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-location__info-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.652827632458!2d-74.00868802355113!3d40.70756617139217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19f6e2c2d3%3A0xe5f0d3f5c7fb2d63!2s125%20Maiden%20Ln%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1731100000000"
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
