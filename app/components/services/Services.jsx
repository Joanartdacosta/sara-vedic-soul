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
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="consultation">
            Services <span>-&gt;</span>
          </h2>
          <button>Schedule a consultation.</button>

          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
        </a>
        <a href="https://www.saravedicsoul.com/">
          <button>Free 15min Discovery Call</button>
        </a>
        <a href="https://www.saravedicsoul.com/book-online?category=c60c3f29-4aa8-4754-b4e7-415972afa0d2">
          <button>Vedic Astrology</button>
        </a>
        <a href="https://www.saravedicsoul.com/book-online?category=99d9a0c7-5218-4f40-be54-5e375eaff660">
          <button>Ayurveda</button>
        </a>
        <a href="https://www.saravedicsoul.com/book-online?category=e705c6a8-3c09-4e34-ba2a-89da392f735d">
          <button>Vedic Counselling</button>
        </a>
        <a href="https://www.saravedicsoul.com/book-online?category=a15ff776-55e8-4f2c-8225-8070ce3566e9">
          <button>Holistic Programs</button>
        </a>
        <a href="https://www.saravedicsoul.com/book-online?category=fc6c16da-a704-4eef-86b4-31e5642bc412">
          <button>Gift Coupon</button>
        </a>
        <a href="https://www.saravedicsoul.com/book-online?category=f1dcabb7-da0c-4642-b2dc-710a46cf86df">
          <button>Counselling at Home</button>
        </a>
      </div>

      <div className={servicesStyle.service}>
        <a
          href="https://www.saravedicsoul.com/vedic-astrology"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="learn">
            Learn <span>-&gt;</span>
          </h2>
          <p>Information about Astrology and Aruveda.</p>
        </a>
      </div>

      <div className={servicesStyle.service}>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 id="contact">
            Contact me <span>-&gt;</span>
          </h2>
          <p>Talk with me for collaborations, issues.</p>
        </a>
      </div>

      <div className={servicesStyle.service}>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL
            with&nbsp;Vercel.
          </p>
        </a>
      </div>
    </div>
  );
}
