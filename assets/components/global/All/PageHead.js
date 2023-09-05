/**
 *
 *  This is the page's meta data and tab settings
 *
 */

import { useRouter } from "next/router";

import Head from "next/head";

import {
  INDEX_KWS,
  PROJECTS_KWS,
  ABOUT_KWS,
  CONTACT_KWS,
} from "@/assets/data/variables/ARRAYS";

export const PageHead = () => {
  const router = useRouter();

  //! Descriptions
  const INDEX_DESC =
    "CodingTheFront, led by freelance web developer Parker Phelps, is your trusted partner for web design and development services. Specializing in custom website development, responsive web design, and innovative web technologies. Contact Parker Phelps for top-quality web solutions in Winston-Salem, NC.";
  const PROJECTS_DESC =
    "Explore codingthefront's web development portfolio, including RTSYVisuals, FiberCompany NC, Animal Ark of Summerlin, and Distinct Painting LLC projects. Discover recent work, achievements, and client projects. Contact Parker Phelps for your next project.";
  const ABOUT_DESC =
    "Parker Phelps, a freelance web developer and owner of codingthefront, with a passion for web development. Explore his portfolio, projects, and approach to web development.";
  const CONTACT_DESC =
    "Contact Parker Phelps, the freelance web developer behind codingthefront. Explore web development pricing, request project estimates, and inquire about his services. Reach out today for your web development needs.";
  const DESCS = [INDEX_DESC, PROJECTS_DESC, ABOUT_DESC, CONTACT_DESC];

  let desc;
  let kws;
  let title;
  let robots;
  let url;

  // Index Page
  if (router.pathname == "/") {
    title = "codingthefront - Parker Phelps";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[0];
    } else {
      desc = DESCS[0];
    }

    kws = INDEX_KWS;
  }

  // Projects Page
  if (router.pathname == "/projects") {
    title = "codingthefront - Projects";
    robots = "index, follow";
    url = router.pathname;

    if (INDEX_DESC.length > 0) {
      desc = DESCS[1];
    } else {
      desc = DESCS[1];
    }

    kws = PROJECTS_KWS;
  }

  // About Page
  if (router.pathname == "/info") {
    title = "codingthefront - About Parker";
    robots = "index, follow";
    url = router.pathname;

    if (ABOUT_DESC.length > 0) {
      desc = DESCS[2];
    } else {
      desc = DESCS[2];
    }

    kws = ABOUT_KWS;
  }

  // Contact Page
  if (router.pathname == "/contact") {
    title = "codingthefront - Contact";
    robots = "index, follow";
    url = router.pathname;

    if (CONTACT_DESC.length > 0) {
      desc = DESCS[3];
    } else {
      desc = DESCS[3];
    }

    kws = CONTACT_KWS;
  }

  // 404 Page
  if (router.pathname == "/404") {
    title = "codingthefront - 404";
    robots = "no index, no follow";
    desc = "No description";
    kws = "No keywords";
    url = router.pathname;
  }

  return (
    <Head id="pageHead">
      <title>{title}</title>

      <meta name="keywords" content={kws} />
      <meta name="description" content={desc} />
      <meta name="robots" content={robots} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={url} />
      {/**
      <meta
        name="google-site-verification"
        content="aPd101rbxmZ5gRWC4D6m_kW5i3UVNrrgnmA6CrJWz20"
      />
      */}
      {/**
        <meta
        name="google-site-verification"
        content="V5Rtva_ZUQGbD75j-mxlBzvediiQnPt2hEi7YaPPAEE"
      />
        */}

      <link rel="canonical" href={url} />

      <link
        rel="shortcut icon"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/icons/tab-icons/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/icons/tab-icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/icons/tab-icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://raw.githubusercontent.com/mxrked/codingthefront_2024_CDN/main/icons/tab-icons/favicon-16x16.png"
      />
    </Head>
  );
};
