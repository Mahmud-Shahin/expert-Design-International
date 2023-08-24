import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="main-text">
        <h1 className="text-2xl my-8">FAQ</h1>
        <span>What you want to know. Given the Answer bellow</span>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium py-5">
          What services does Expert Graphic International offer?
        </div>
        <div className="collapse-content">
          <p>
            Expert Graphic International provides a wide range of image editing
            services, including photo retouching, background removal, color
            correction, image masking, photo manipulation, and more. We cater to
            photographers, e-commerce businesses, digital agencies, and
            individual clients seeking professional and high-quality image
            editing solutions.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do I get started with Expert Graphic International?
        </div>
        <div className="collapse-content">
          <p>
            To start with Expert Graphic International, create an account on our
            website, upload your images, and choose the desired service(s). Our
            professional image editors will then work on your project, ensuring
            top-quality results on time.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is the turnaround time for image editing services?
        </div>
        <div className="collapse-content">
          <p>
            Our turnaround time depends on the complexity and volume of the
            project. Typically, we deliver most projects within 24-72 hours.
            However, the turnaround time may vary for larger or more intricate
            projects. We will provide an estimated delivery time when you submit
            your order.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How much do your services cost?
        </div>
        <div className="collapse-content">
          <p>
            The pricing for our services varies depending on the service type
            and the project’s complexity. We offer competitive pricing with
            customized quotes for each project. For detailed pricing
            information, please visit our Pricing page or contact our support
            team for a personalized quote.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are my images secure with Expert Graphic International?
        </div>
        <div className="collapse-content">
          <p>
            Yes, your images are completely secure with us. We take data privacy
            and security very seriously. Our website is SSL encrypted, and we
            follow strict guidelines to ensure your images are always protected.
            We also have a strict privacy policy in place, which prohibits the
            use or sharing of your images without your consent.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What file formats do you accept for photo editing?
        </div>
        <div className="collapse-content">
          <p>
            We accept a wide range of file formats, including JPEG, PNG, TIFF,
            RAW, PSD, and more. If you have a specific file format not listed
            here, don’t hesitate to contact our customer support team to verify
            compatibility.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How long does it take to receive my edited photos?
        </div>
        <div className="collapse-content">
          <p>
            The turnaround time for edited photos depends on the complexity of
            the project and the volume of photos submitted. Typically, you can
            expect your photos to be returned within 1-3 business days. However,
            we also offer express delivery options for time-sensitive projects.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 my-10">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do you ensure the quality of your photo editing services?
        </div>
        <div className="collapse-content">
          <p>
            Our team of skilled photo editors follows a strict quality assurance
            process, including multiple revisions and checks to ensure that the
            final output meets your expectations. We also offer a 100%
            satisfaction guarantee, allowing you to request revisions until
            you’re delighted with the results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
