import { Inter,Poppins,Rubik,Dancing_Script,Lobster_Two,Abril_Fatface,Jost } from "next/font/google";

const dancing= Dancing_Script({subsets:['latin']})
 const jost= Jost({subsets:['latin']})

 const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})



 const inter = Inter({ subsets: ["latin"],variable:"--font-inter" });

 const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

 const abril_fatface = Abril_Fatface({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-abril-fatface',
  weight: [ '400']
});
 const lobster_two = Lobster_Two({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lobster-two',
  weight: [ '400','700']
});

 const dancing_script = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing-script',
  weight: ['400', '500', '600', '700']
});

 const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: [ '300', '400', '500', '600', '700', '800', '900']
});

export {
 poppins,
 rubik,
 dancing_script,
 lobster_two,
 inter,
 jost,
 abril_fatface,
 lobster,
 dancing,
}