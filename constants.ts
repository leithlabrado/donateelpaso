import { SiteContent, EventItem } from './types';

export const INITIAL_CONTENT: SiteContent = {
  general: {
    phone: '915.588.4252',
    email: 'leith@donateelpaso.com',
    address: '813 First Ave, El Paso, TX 79901',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
  },
  home: {
    heroTitle: 'Help Us Support El Paso Schools',
    heroSubtitle: 'Redirecting clothing from closets to the people who need them most.',
    missionTitle: 'Our Mission',
    missionText: 'We are honored to serve as a Partner in Education with YISD, EPISD, SISD, and CISD. Our mission is to work closely with each school to provide essential clothing and financial assistance to families in need. Last year alone, we contributed more than $20,000 to schools across El Paso.',
    impactText: 'In the United States, approximately 11.3 million tons of clothing are discarded into landfills each year—equivalent to about 81.5 pounds per person. Much of this material could be repurposed to benefit those facing hardship. At Donate El Paso, we are committed to helping redirect these items from closets to the people who need them most.',
  },
  donate: {
    introText: 'Donate El Paso provides donated clothing directly to students throughout El Paso, as well as to organizations such as the Opportunity Center for the Homeless, Church Under the Bridge, and God’s Table.',
    binLocations: [
      'Montwood High School',
      'Montwood Middle School',
      'Christian Schools of El Paso',
      'El Paso High School',
      'Moye Elementary',
      'Colin L Powell Elementary',
      'Bliss Elementary',
      'Andres High School',
      'Hanks High School',
      'Pebble Hills HS',
      'El Dorado HS',
      'Eastwood HS',
      'Franklin HS',
      'Bel Air HS',
      'Burgess HS',
      'Rafael Hernando',
      'Sun Ridge Middle',
      'Jane Hambric Elementary',
      'Hershal Antwine',
      'Walter E Clarke Middle',
      'Wonder World Daycare',
      'Western Hills Elementary',
      'First to Read Day Care',
      'Myrtle Cooper',
      'Eastlake Middle School',
      'Genie\'s Daycare',
      'Eastlake HS',
      'Ensor Elementary',
      'Triumph High School East',
      'Triumph High School West',
      'Loma Verde Elementary'
    ],
    monetaryText: '100% of all monetary contributions goes to provide food and clothing to students at our local schools!',
    pickupText: 'We want to make sure we support our community in every way possible by providing home pick-ups. These donations directly benefit the students in El Paso, TX.',
  },
  about: {
    title: 'About Us',
    historyText: 'We have been part of the used clothing industry for more than 12 years. What began with a single donation bin that we built ourselves has grown into a robust community program. Today, we proudly maintain over 30 donation bins throughout El Paso.',
    partnersText: 'Our growth has allowed us to support other charities by providing clothing, financial assistance, food, and essential supplies. Partnering with businesses across the city has expanded our ability to serve the community.',
  },
  events: {
    introText: 'Join us in our upcoming clothing drives and community events.',
    featuredEventTitle: 'Sponsor a Child or Family',
    featuredEventText: 'We had the honor with the Principal of Parkland High School, Mr. Salgado, to sponsor two outstanding students who have overcome many obstacles to reach their goals. Every person who donates helps form a partnership that gives students an opportunity to achieve their own personal goals.',
  },
};

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Parkland HS Sponsorship',
    date: '2024-05-15',
    location: 'Parkland High School',
    description: 'Celebrating student achievements and providing financial assistance.',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 2,
    title: 'Back to School Drive',
    date: '2024-08-10',
    location: 'El Paso Convention Center',
    description: 'Collecting backpacks and uniforms for the upcoming school year.',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 3,
    title: 'Winter Coat Collection',
    date: '2024-11-01',
    location: 'Various Bin Locations',
    description: 'Ensuring every child stays warm this winter. Drop off coats at any bin.',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];