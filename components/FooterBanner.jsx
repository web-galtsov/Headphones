import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1F, largeText2, saleTime, smallTextF, midTextF, descF, product, buttonTextF, imageF } }) => {
  return (
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1F}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className="right">
            <p>{smallTextF}</p>
            <h3>{midTextF}</h3>
            <p>{descF}</p>
            <Link href={`/product/${product}`}>
              <button type="button">{buttonTextF}</button>
            </Link>
          </div>

          <img
              src={urlFor(imageF)} className="footer-banner-image"
          />
        </div>
      </div>
  )
}

export default FooterBanner
