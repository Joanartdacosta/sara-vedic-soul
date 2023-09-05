import React from "react";
import servicesStyle from "./services.module.css";

export default function Services() {
  return (
    <div className={servicesStyle.servicesMenu}>
      <div className={servicesStyle.service}>
        <a id="website" href="https://pt.saravedicsoul.com/" target="_blank">
          Website PT
        </a>
        <p>
          {" "}
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>

      <div className={servicesStyle.service}>
        <a id="website" href="https://www.saravedicsoul.com/" target="_blank">
          Website EN
        </a>
        <p>
          {" "}
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>

      <div className={servicesStyle.service}>
        <h2 id="consultation">Services</h2>
        <button className={servicesStyle.buttonService}>
          <a href="https://pt.saravedicsoul.com/book-online" target="_blank">
            <p>Schedule a consultation.</p>
          </a>
        </button>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>

        <a href="https://www.saravedicsoul.com/" target="free-call">
          <button className={servicesStyle.buttonService}>
            Free 15min Discovery Call
          </button>
        </a>

        <button className={servicesStyle.buttonService}>
          <a
            href="https://www.saravedicsoul.com/book-online?category=c60c3f29-4aa8-4754-b4e7-415972afa0d2"
            target="vedic"
          ></a>
          Vedic Astrology
        </button>

        <button className={servicesStyle.buttonService}>
          <a href="https://www.saravedicsoul.com/book-online?category=99d9a0c7-5218-4f40-be54-5e375eaff660">
            <p>Ayurveda</p>
          </a>
        </button>

        <button className={servicesStyle.buttonService}>
          <a href="https://www.saravedicsoul.com/book-online?category=e705c6a8-3c09-4e34-ba2a-89da392f735d">
            <p> Vedic Counselling</p>{" "}
          </a>
        </button>

        <button className={servicesStyle.buttonService}>
          <a href="https://www.saravedicsoul.com/book-online?category=a15ff776-55e8-4f2c-8225-8070ce3566e9">
            <p>Holistic Programs</p>
          </a>
        </button>

        <button className={servicesStyle.buttonService}>
          <a href="https://www.saravedicsoul.com/book-online?category=fc6c16da-a704-4eef-86b4-31e5642bc412">
            <p>Gift Coupon</p>
          </a>
        </button>

        <button className={servicesStyle.buttonService}>
          <a href="https://www.saravedicsoul.com/book-online?category=f1dcabb7-da0c-4642-b2dc-710a46cf86df">
            <p>Counselling at Home</p>
          </a>
        </button>
      </div>

      <div className={servicesStyle.service}>
        <a
          href="https://www.saravedicsoul.com/vedic-astrology"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="learn">Learn</h2>
          <p className={servicesStyle.titles}>
            Information about Astrology and Aruveda.
          </p>
        </a>
      </div>

      <div className={servicesStyle.service}>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="contact">
            <p>Contact me</p>
          </h2>
          <p className={servicesStyle.titles}>
            Talk with me for collaborations, issues.
          </p>
        </a>
      </div>
    </div>
  );
}
