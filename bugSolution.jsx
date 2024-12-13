// bug.jsx
'use client'
import Link from 'next/link';

export default function Page({params}){
  return (
    <div>
        <h1>Product Page: {params.productId}</h1>
        <Link href={`/product/${params.productId}/details`}>Go to details</Link>
    </div>
  );
}


//pages/product/[productId]/page.jsx
export default function Page({params}){
    return(
        <div>
            <h1>Product Detail Page: {params.productId}</h1>
        </div>
    );
}

//app/layout.js
export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
//app/layout.js
export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}

//app/product/[productId]/layout.js
export default function ProductLayout({ children,params }) {
  return (
    <div>
      <h2>Product Layout</h2>
      {children}
      <p>Product ID: {params.productId}</p> 
    </div>
  );
}
//bugSolution.jsx
'use client'
import Link from 'next/link';

export default function Page({params}){
  return (
    <div>
        <h1>Product Page: {params.productId}</h1>
        <Link href={`/product/${params.productId}/details`}>Go to details</Link>
    </div>
  );
}

//pages/product/[productId]/page.jsx
export default function Page({params}){
    return(
        <div>
            <h1>Product Detail Page: {params.productId}</h1>
        </div>
    );
}

//app/layout.js
export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
//app/layout.js
export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}

//app/product/[productId]/layout.js
export default function ProductLayout({ children,params }) {
  console.log(params);
  return (
    <div>
      <h2>Product Layout</h2>
      {children}
      <p>Product ID: {params.productId}</p> 
    </div>
  );
}
