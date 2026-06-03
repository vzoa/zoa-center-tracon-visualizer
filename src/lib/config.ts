import {
  CenterAreaDefinition,
  MapStyle,
  ProcedureKind,
  TraconAreaPolys,
  TraconPolyDefinition,
  VnasGeoMap,
  VnasMapGroup,
  VnasVideoMap,
} from '~/lib/types';
import { DEFAULT_MAP_STYLE } from '~/lib/defaults';

///////////////////////////////////////////////////
// Center Areas
///////////////////////////////////////////////////
// Area East
import sector30 from '~/polys/center/east/30.geojson';
import sector33 from '~/polys/center/east/33.geojson';
import sector34 from '~/polys/center/east/34.geojson';
import sector44 from '~/polys/center/east/44.geojson';
import sector45 from '~/polys/center/east/45.geojson';
import sector46 from '~/polys/center/east/46.geojson';

// Area North
import sector29 from '~/polys/center/north/29.geojson';
import sector32 from '~/polys/center/north/32.geojson';
import sector40 from '~/polys/center/north/40.geojson';
import sector41 from '~/polys/center/north/41.geojson';
import sector42 from '~/polys/center/north/42.geojson';
import sector43 from '~/polys/center/north/43.geojson';

// Pac North
import sector31 from '~/polys/center/pacnorth/31.geojson';
import sector36 from '~/polys/center/pacnorth/36.geojson';

// Pac South
import sector14 from '~/polys/center/pacsouth/14.geojson';
import sector35 from '~/polys/center/pacsouth/35.geojson';

// Area South
import sector10 from '~/polys/center/south/10.geojson';
import sector11 from '~/polys/center/south/11.geojson';
import sector13 from '~/polys/center/south/13.geojson';
import sector15 from '~/polys/center/south/15.geojson';
import sector16 from '~/polys/center/south/16.geojson';
import sector22 from '~/polys/center/south/22.geojson';

///////////////////////////////////////////////////
// Tracon Areas
///////////////////////////////////////////////////
// E-NV
import nugget from '~/polys/tracon/e-nv/nugget.geojson';
import silver from '~/polys/tracon/e-nv/silver.geojson';

// E-CA
import smfnElkhorn from '~/polys/tracon/e-ca/smfn-elkhorn.geojson';
import smfnParadise from '~/polys/tracon/e-ca/smfn-paradise.geojson';
import smfsElkhorn from '~/polys/tracon/e-ca/smfs-elkhorn.geojson';
import smfsParadise from '~/polys/tracon/e-ca/smfs-paradise.geojson';

// A
import morgan from '~/polys/tracon/a/morgan.geojson';
import seca from '~/polys/tracon/a/seca.geojson';
import sfowLicke from '~/polys/tracon/a/sfow-licke.geojson';
import sfowToga from '~/polys/tracon/a/sfow-toga.geojson';
import sfoeLicke from '~/polys/tracon/a/sfoe-licke.geojson';
import sfoeToga from '~/polys/tracon/a/sfoe-toga.geojson';
import sjceLicke from '~/polys/tracon/a/sjce-licke.geojson';
import sjceToga from '~/polys/tracon/a/sjce-toga.geojson';

// B
import sfowBoulder from '~/polys/tracon/b/sfow-boulder.geojson';
import sfowCedar from '~/polys/tracon/b/sfow-cedar.geojson';
import sfowFoster from '~/polys/tracon/b/sfow-foster.geojson';
import sfowLaguna from '~/polys/tracon/b/sfow-laguna.geojson';
import sfowNiles from '~/polys/tracon/b/sfow-niles.geojson';
import sfowWoodside from '~/polys/tracon/b/sfow-woodside.geojson';
import sfoeBoulder from '~/polys/tracon/b/sfoe-boulder.geojson';
import sfoeCedar from '~/polys/tracon/b/sfoe-cedar.geojson';
import sfoeFoster from '~/polys/tracon/b/sfoe-foster.geojson';
import sfoeLaguna from '~/polys/tracon/b/sfoe-laguna.geojson';
import sfoeNiles from '~/polys/tracon/b/sfoe-niles.geojson';
import sfoeWoodside from '~/polys/tracon/b/sfoe-woodside.geojson';
import sfo10Woodside from '~/polys/tracon/b/sfo10-woodside.geojson';
import sfo10Niles from '~/polys/tracon/b/sfo10-niles.geojson';
import sfo10Foster from '~/polys/tracon/b/sfo10-foster.geojson';
import sfo10Boulder from '~/polys/tracon/b/sfo10-boulder.geojson';
import oakeFoster from '~/polys/tracon/b/oake-foster.geojson';
import oakeBoulder from '~/polys/tracon/b/oake-boulder.geojson';

// C
import sfowValley from '~/polys/tracon/c/sfow-valley.geojson';
import sfowGrove from '~/polys/tracon/c/sfow-grove.geojson';
import sfowSunol from '~/polys/tracon/c/sfow-sunol.geojson';
import sfoeValley from '~/polys/tracon/c/sfoe-valley.geojson';
import sfoeGrove from '~/polys/tracon/c/sfoe-grove.geojson';
import sfoeSunol from '~/polys/tracon/c/sfoe-sunol.geojson';
import sfo10Grove from '~/polys/tracon/c/sfo10-grove.geojson';
import oakeGrove from '~/polys/tracon/c/oake-grove.geojson';

// D
import sfowRichmond from '~/polys/tracon/d/sfow-richmond.geojson';
import sfowSutro from '~/polys/tracon/d/sfow-sutro.geojson';
import sfoeRichmond from '~/polys/tracon/d/sfoe-richmond.geojson';
import sfoeSutro from '~/polys/tracon/d/sfoe-sutro.geojson';
import oakeRichmond from '~/polys/tracon/d/oake-richmond.geojson';
import oakeSutro from '~/polys/tracon/d/oake-sutro.geojson';

// FAT
import fatnChandler from '~/polys/tracon/fat/fatn-chandler.geojson';
import fatnFriant from '~/polys/tracon/fat/fatn-friant.geojson';
import fatsChandler from '~/polys/tracon/fat/fats-chandler.geojson';
import fatsFriant from '~/polys/tracon/fat/fats-friant.geojson';
import fatnSouth from '~/polys/tracon/fat/fatn-south.geojson';

// MIL
import lemoore from '~/polys/tracon/mil/lemoore.geojson';
import fallon from '~/polys/tracon/mil/fallon.geojson';
import sfowTravis from '~/polys/tracon/mil/sfow-travis.geojson';
import sfoeTravis from '~/polys/tracon/mil/sfoe-travis.geojson';

///////////////////////////////////////////////////
// Base Maps
///////////////////////////////////////////////////
export const NAVDATA_API_URL = 'https://navdata.oakartcc.org';
export const NAVDATA_API_VERSION = 'v1';

const NAVDATA_PATH_BY_KIND: Record<ProcedureKind, string> = {
  sid: 'departures',
  star: 'arrivals',
  app: 'approaches',
};

export const navdataUrl = (kind: ProcedureKind, airport: string) =>
  `${NAVDATA_API_URL}/${NAVDATA_API_VERSION}/${NAVDATA_PATH_BY_KIND[kind]}/${encodeURIComponent(airport)}`;

export const navdataAirportUrl = (airport: string) =>
  `${NAVDATA_API_URL}/${NAVDATA_API_VERSION}/airports/${encodeURIComponent(airport)}`;

export const navdataAirwayUrl = (identifier: string) =>
  `${NAVDATA_API_URL}/${NAVDATA_API_VERSION}/airways/${encodeURIComponent(identifier)}`;

export const navdataPointUrl = (identifier: string) =>
  `${NAVDATA_API_URL}/${NAVDATA_API_VERSION}/points/${encodeURIComponent(identifier)}`;

// Permissive enough for ICAO airports, navaid fixes (3-5 chars), airway codes
// (e.g. J88, B453), and 5-character RNAV waypoints. Rejects anything with
// non-alphanumeric chars or path separators so bogus tokens never reach the
// network and don't pollute the per-id caches.
const NAVDATA_ID_RE = /^[A-Z0-9]{2,10}$/;
export const isValidNavdataIdentifier = (s: string): boolean => NAVDATA_ID_RE.test(s);

export const MAP_STYLES: MapStyle[] = [
  DEFAULT_MAP_STYLE,
  {
    value: 'mapbox://styles/mapbox/light-v11',
    label: 'World Light',
    disabled: false,
  },
  {
    value: 'mapbox://styles/mapbox/dark-v11',
    label: 'World Dark',
    disabled: false,
  },
  {
    value: 'mapbox://styles/kengreim/clw6l16rw002o01q1cq9h43ft',
    label: 'Satellite Low Opacity',
    disabled: false,
  },
];

export const VNAS_VIDEO_MAP_BASE_URL =
  'https://data-api.vnas.vatsim.net/Files/VideoMaps/ZOA';

// All ZOA video maps from vNAS, sourced from each facility's starsConfiguration in the ZOA ARTCC config.
export const VNAS_VIDEO_MAPS: VnasVideoMap[] = [
  // Fresno ATCT
  { facility: "Fresno ATCT", id: "01GESV017E6YW9E4APAXHDZJCE", starsId: 321, name: "321 RWY_11", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV017HYS7MY201AQMRR9QB", starsId: 323, name: "323 RWY_29", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV0171N5NFWEHAWATCXGXW", starsId: 322, name: "322 MVA", bcg: "B", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV0184AQGS992B0HDHEMMB", starsId: 328, name: "328 VOR_TAC", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV01646Y2PBTB5A2FD11XY", starsId: 330, name: "330 GEOG_R", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV016HHKS8P39K7PX36GZP", starsId: 327, name: "327 GPS_Z", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV016EGGEQNSKMKXVV5MPM", starsId: 329, name: "329 GPS_X", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV015PVT0C4WJE0V0JCM3M", starsId: 324, name: "324 3SECT11", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV01740J1928TN5EQ4FXDA", starsId: 320, name: "320 MVA5MI", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GQ9GZ921YT1K6Z4QX5ZFXRMV", starsId: 325, name: "325 EOVM", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GE9SE1GPQSHFJJQZGC31PX2D", starsId: 326, name: "326 GPS", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV016XGWS7FVJFE51VW8J8", starsId: 331, name: "331 MAE_GPS", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV0160KVB7TBKTMDW6QTFY", starsId: 332, name: "332 FCH_GPS", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV0180M7RM1W2KGA4D6Y0Q", starsId: 333, name: "333 VIS", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV017WX3W2XST2RZQ130A6", starsId: 334, name: "334 TLR_PTV", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV016PS80EJMPWJA83W79Z", starsId: 335, name: "335 HJO", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV0169PG04CDH5R36QRTZV", starsId: 336, name: "336 GEOG_T", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV015T6WKZSPDC8XAMS9PB", starsId: 337, name: "337 AIRSPAC", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV016SY9G3HXSGR0P44YYR", starsId: 338, name: "338 HOSPT", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV017NCM34Y1K2E9QE56PV", starsId: 339, name: "339 STADIUM", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01GESV017941DACVH73GSX0JKE", starsId: 340, name: "340 O32_FIN", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01H5WM9S1T5F9FTAJK6TBYF274", starsId: 343, name: "343 FAT_FIN", bcg: "A", showDefault: false },
  { facility: "Fresno ATCT", id: "01HA7QZJ0G6TG3Y03JYAQ6RSF9", starsId: 999, name: "999 TDM", bcg: "B", showDefault: false },
  { facility: "Fresno ATCT", id: "01HEHBRCBR0GVX8F9DXXTRB9P6", starsId: 995, name: "995 MAZE", bcg: "A", showDefault: false },
  // Northern California TRACON
  { facility: "Northern California TRACON", id: "01GE9SE1H343T0ZZQ6DP787MKV", starsId: 1, name: "1 LO-W_S", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1H1BMSTFHJ0G5WMS9PE", starsId: 2, name: "2 LO-E_N", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1H79Z9R9W34RGMHKP1B", starsId: 3, name: "3 MVAC", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GN90P0HP1DEFT29RH6CAZVHA", starsId: 4, name: "4 AIRWAYS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GD5X8BMDT93FQJ1F4E", starsId: 5, name: "5 EOVM", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GKHQDF6DBXCB8PCTPB", starsId: 6, name: "6 GEOG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1EGMR4V1EPF49141FEK", starsId: 7, name: "7 GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HT18Z1HAX77QYRGAY5", starsId: 8, name: "8 ZOA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GVDHYX359ATPW4ZE9N", starsId: 9, name: "9 HI-W_S", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GSJNP0JDH99V3FT4SN", starsId: 10, name: "10 HI-E_N", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GXZSYJ9KHY86QKZY8F", starsId: 13, name: "13 ISR-MVA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HPB57BSWGCBZ5PK7W8", starsId: 14, name: "14 SORIN", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GBZ9PE67MK3KAQEGNZ", starsId: 15, name: "15 EMERG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1EEDBH57JRX4CK14HYB", starsId: 16, name: "16 AIRSPC", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HRAAESS732WKDF3V5T", starsId: 17, name: "17 T-RTE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1H5GP1K1C6SD0X5DZQX", starsId: 18, name: "18 MILTARY", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HKWBVXPRWYQ2RZ7WRW", starsId: 19, name: "19 RNVHELO", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAJ2Z0T2H1V61D1G04J4Q4D", starsId: 21, name: "21 FIN-W_S", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAJ1PQY03A7MQZJG6774CCK", starsId: 22, name: "22 FIN-E_N", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HCM07CR0M4EV26JXM9", starsId: 23, name: "23 PAJA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HA2VSR5WCP91T6S8SQ", starsId: 24, name: "24 NON-RDR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FM9AHKVPBV7Q1N3TZX", starsId: 25, name: "25 DOTS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1F78P2YS5F2PC208SPV", starsId: 26, name: "26 CBA_LBL", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1F439TWRNPD9Z25C4DM", starsId: 27, name: "27 CBA", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1GFP8W2Y37C6J34GKSJ", starsId: 28, name: "28 FLYWYTX", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1E783B88YS7E9PP7TZV", starsId: 31, name: "31 A_SIDS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FD2ZD5NXTGWD5SDXR9", starsId: 34, name: "34 D_SIDS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FSDSRS5DJW473CHFFQ", starsId: 35, name: "35 E_SIDS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HEFBSW2KTXCP67CF7X", starsId: 36, name: "36 R_SIDS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1E9RG1QF22FNTQPAHX7", starsId: 41, name: "41 A_STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1EJKJE79QQJA6YGPB1F", starsId: 42, name: "42 B_STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1ERKW3493T0G3KB2A21", starsId: 43, name: "43 C_STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FF8E43BH882ZSG8D23", starsId: 44, name: "44 D_STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1G68SGE8FZ04RS2DZ8T", starsId: 45, name: "45 E_STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1HHJRC42WWV5ZEC32GY", starsId: 46, name: "46 R_STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAJXPEDQ10YXW9DE6TM5DX8", starsId: 53, name: "53 PROMOBS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAJWN6C88Y96PCE4GE8C6WW", starsId: 54, name: "54 PROMALT", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1E2GFZMA2AQQX1MFBG6", starsId: 61, name: "61 A_GPS1", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1E4TM4GKPT2CH7E2J8W", starsId: 62, name: "62 A_GPS2", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1EMM0KW85M2G6PNPHR6", starsId: 63, name: "63 B_GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1EPX968R5WFYY60FSVD", starsId: 65, name: "65 C_GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FAW92SY796ZEYCG6CC", starsId: 66, name: "66 C_GPS2", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FJH5CJ7AC93FRWH3AK", starsId: 67, name: "67 D_GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1FQV2R8VNGQCB0K8F94", starsId: 69, name: "69 E_GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPMW03HQ6EK8ZYKMWMM", starsId: 700, name: "700 ELKHN_N", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPEV8GZZWT9EESRBPW8", starsId: 701, name: "701 DELTA_N", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPN2EBSJ4SK9TD3EQGW", starsId: 702, name: "702 EXPO_N", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP5A7QXXAEMXJ07GQZV", starsId: 705, name: "705 BUTTE_N", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ8V4DT3QNSWM5A39K6", starsId: 706, name: "706 PARAD_N", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNHZ9TYHCPB0GG85WVN", starsId: 710, name: "710 TOGA_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ2FBXP4X1ZEDY9M3JE", starsId: 712, name: "712 LICKE_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPZGM6F1A89ZBKNJKHB", starsId: 714, name: "714 HOOKS_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQCTQ5SV4JR53XGE885", starsId: 716, name: "716 SECA", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPVD5A3B3JCWNSNNFYC", starsId: 717, name: "717 FREMONT", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ5ZP0PM4JYH9SGT285", starsId: 718, name: "718 MORGAN", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNNHZEJBVY31XVV1MX5", starsId: 719, name: "719 TURLOCK", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNTGZ2YW6AKFZF8PG8Q", starsId: 720, name: "720 WOODS_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPVMZQBTRSDRP5W2RGJ", starsId: 722, name: "722 FOST_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPR51278KVSEDBZK6DY", starsId: 723, name: "723 FOSOAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ0FBHJXMAZ4X708B25", starsId: 724, name: "724 LAGUNA", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP3S9H92B645DV2YJS5", starsId: 725, name: "725 BOLD_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP4THAHDSDR2JWX4KAR", starsId: 726, name: "726 BOLOAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ698AHXRQ3YN04A772", starsId: 727, name: "727 NILES_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP9Y35KJ0VBW32SWZBH", starsId: 729, name: "729 CEDAR_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQE81RRVHZQJG56T643", starsId: 730, name: "730 SUNOL_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ4EQ5XMN0F54DHFDT4", starsId: 731, name: "731 MLFRD_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ30AK6Q06YASMENYJQ", starsId: 732, name: "732 MLFOAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPXPA1B6NC7WRKPHK0G", starsId: 733, name: "733 GROVE_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPXPFCVF3DV7TSAG2XH", starsId: 734, name: "734 GRVOAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNM7CDXD55SQ7VW4DTQ", starsId: 735, name: "735 TRACY_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNPA877K22JDS859DN3", starsId: 736, name: "736 VALLEY", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP8WA7MBJDJY5JZGPGA", starsId: 737, name: "737 CASTLE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQA6NZ1VYMJSSSHMCWE", starsId: 740, name: "740 QUAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNEEBVAD4136P0WEGXV", starsId: 741, name: "741 SUTRO_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQFBP88PFVYQEZRYPSX", starsId: 742, name: "742 SUTOAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQBWY9R4PZE39RPWQVV", starsId: 743, name: "743 RCHMNDW", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQCVAE4RHS8G5WVDVXX", starsId: 744, name: "744 RCHOAKE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPGCTY9YXZEM12MN9M5", starsId: 745, name: "745 DIABLOW", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPQJB87Y63FBXQFVWG9", starsId: 746, name: "746 FAIRF_W", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPM4H0P5E5WJ7RYX724", starsId: 750, name: "750 ELKHN_S", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPFDV3J9SZ0XV4PDB7B", starsId: 751, name: "751 DELTA_S", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPPJ6BC1N6BCRV3TV02", starsId: 752, name: "752 EXPO_S", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAGZD1ZR35HS3ZXZJ5XZJ8F", starsId: 753, name: "753 NUGGET", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQD060ABJ2902D3A0D5", starsId: 754, name: "754 SILVER", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP6TR9DERG7E9MS7F36", starsId: 755, name: "755 BUTTE_S", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ9XMBNJWEBZD4C4CW3", starsId: 756, name: "756 PARAD_S", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNG9BDGBVQ9TDK4HN5V", starsId: 760, name: "760 TOGA_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNJD8J2A2J1582B3445", starsId: 761, name: "761 TOGSJCE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ1PDX02BW5GSNJ0ZGR", starsId: 762, name: "762 LICKE_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ38NHRN914SWY235ZP", starsId: 763, name: "763 LICSJCE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPYV7NQ8HE0YW31QN5H", starsId: 764, name: "764 HOOKS_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPZ7S6RT41BEM2TC1ZT", starsId: 765, name: "765 HOOSJCE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNSRD42E7XYJHH7A53J", starsId: 770, name: "770 WOODS_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNR0C55WB6K8SD1T8TB", starsId: 771, name: "771 WOOD_10", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPTPECNA764S6FZQZBJ", starsId: 772, name: "772 FOST_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPS3FB3WVMM24ZNCWP8", starsId: 773, name: "773 FOST_10", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP2Z804GWDR65PAVKBJ", starsId: 775, name: "775 BOLDERE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP1S291EZQGQNBQGKGN", starsId: 776, name: "776 BOLD_10", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ67RNFP019XYBF5A3X", starsId: 777, name: "777 NILES_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ88W1J5NTYAE2Y9GZD", starsId: 778, name: "778 NILES10", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YP8RVT8VSTZ93XYHC4C", starsId: 779, name: "779 CEDAR_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQEWYWHP2NBPGKSEHCK", starsId: 780, name: "780 SUNOL_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQ133HK1NK7RQPWEX0X", starsId: 781, name: "781 LAGUNAE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPW052R2PRR0H09Y4JV", starsId: 783, name: "783 GROVE_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GE9SE1AHCS6CJS73CH3J77PZ", starsId: 784, name: "784 GR_SF10", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNKSWKFJ6K4NNH4487K", starsId: 785, name: "785 TRACY_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YNC5EXJA1NJ9T9AP8ZC", starsId: 791, name: "791 SUTRO_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YQAZ1EAVATH939ZK20R", starsId: 793, name: "793 RCHMNDE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPGZ2EVTGCFB6G0APP3", starsId: 795, name: "795 DIABLOE", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAG2YPQBA31VEC968DNF7TY", starsId: 796, name: "796 FAIRF_E", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01FM64DQG95SZHZ33HMW", starsId: 470, name: "470 R-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01FGDVBEWM1R5XHKGTNA", starsId: 471, name: "471 R-IFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01FB3PXSH5P1CCS93ZAN", starsId: 472, name: "472 R-APCHS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01ZHYRHSVQQBWYM77ETX", starsId: 480, name: "480 E-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01ZCHXS650QQGEWGJD24", starsId: 481, name: "481 E-GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0154RSDNP30PJCYEVA4G", starsId: 490, name: "490 W-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV015AASYYY42AXV522M54", starsId: 491, name: "491 W-GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV015JTTN7T61H6NVNYW29", starsId: 492, name: "492 W-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01571K66S9049QQ91FFN", starsId: 493, name: "493 W-GEOG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV015FFNFAGNDSHYK08E89", starsId: 494, name: "494 W-PEAKS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV014Z5AVKS8B9AAG00127", starsId: 495, name: "495 W-AIRPT", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01XJPFJ5PPZJW5KDY82V", starsId: 500, name: "500 A-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01XDMF4N251T8D5YPNMD", starsId: 501, name: "501 A-OBS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01WZ4YMYC9JKCEK4MWAF", starsId: 502, name: "502 A-AIRPT", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01X97D24E8VYT6MSB0R4", starsId: 503, name: "503 A-GEOG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01X4VPBBRFPE939CTR9B", starsId: 504, name: "504 A-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01XR949YHBWG12VSN9FZ", starsId: 510, name: "510 B-CCA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01Y6WAJPX6Z91B5Q5VQP", starsId: 511, name: "511 B-FINAL", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01YBJRWK3P720N916QQ0", starsId: 512, name: "512 B-GH", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01XWSYMKN2ZFR1CZE6DH", starsId: 513, name: "513 B-DP-15", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01Y0DDMWT23FC8RWTQHX", starsId: 514, name: "514 B-DP-33", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01YPD54QQ4PRXR8MDF2H", starsId: 515, name: "515 B-PTN15", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01YTQTP98HXESGRTKRSK", starsId: 516, name: "516 B-PTN33", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01YG7TSMP0KAYJ09YTX0", starsId: 517, name: "517 B-MOA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01Z8EGYYMB2CFPHR2YSQ", starsId: 520, name: "520 D-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNAMMXQ8PAMMXM7ZY65Y70R2", starsId: 521, name: "521 D-GEOG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01YY90F06N25AN11MYDV", starsId: 522, name: "522 D-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01Z3M8343G3BN7QR5G3C", starsId: 523, name: "523 D-SUU", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01ZW9HJM9JYHTKR38SGC", starsId: 530, name: "530 F-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0201BRHHCF5V2SCG5B7A", starsId: 531, name: "531 F-HIWAY", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01ZQWBCQAXCYBX6NZ5KS", starsId: 532, name: "532 F-AIRWY", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0206AVS94PSZYKY5FM6K", starsId: 533, name: "533 F-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0210KNXJQFKAZR5JB1Z3", starsId: 540, name: "540 G-GEOG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV02150FNWPFYW745SGMMV", starsId: 541, name: "541 G-HIWAY", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV020H5Z40R01RKRXNK1Z6", starsId: 542, name: "542 G-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV020VZ7VT07F9RMENW2KD", starsId: 544, name: "544 G-FIXES", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV020B8BAED1XGNGTG5TRV", starsId: 545, name: "545 G-AIRPT", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV021H8GPCF4FJKJ5GHG7V", starsId: 550, name: "550 H-RWY22", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV022016BYVC4XHYVWKBG7", starsId: 551, name: "551 H-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV021BF5WBERSARH75XXSF", starsId: 552, name: "552 H-ODO", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0225Z3H7X7WKMG4DWHEG", starsId: 560, name: "560 I-ODO", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01GXC649HYSHWF5BW91A", starsId: 570, name: "570 J-RWY28", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01GQ7KY8BD92MSS7Y7H7", starsId: 571, name: "571 J-RWY10", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01GEHBWA2Z7HYFZRD0EJ", starsId: 572, name: "572 J-CCA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01GJEZWR3SHYHEGFRAQ7", starsId: 573, name: "573 J-JUMP", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01HERWDQWE204QAJ6HK8", starsId: 580, name: "580 K-N-SE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01HJZGMVDGGHKXCQAY52", starsId: 581, name: "581 K-N-W", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01H1TZWRNTQKJM76CCFT", starsId: 582, name: "582 K-AMPH", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01H86T2XAAFZHK2E4FFG", starsId: 584, name: "584 K-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01HB0XWKSY24C835NWAT", starsId: 585, name: "585 K-HIWAY", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNANGS0G4BQ6FN3FCCHHZ72S", starsId: 586, name: "586 K-SJC-E", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01JH0AK8918FYVVJFF4D", starsId: 590, name: "590 L-WEST", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01HVWE1XVK81464QXWVR", starsId: 591, name: "591 L-SE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01J938TVPTB5A996A7Z4", starsId: 592, name: "592 L-TMPLE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01JDNZCH38CZ532HYM4J", starsId: 593, name: "593 L-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01HQR8BDE7S04N4EY1NH", starsId: 594, name: "594 L-HWD_D", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01J4PJ0NCVMMWK1S4DRT", starsId: 595, name: "595 L-STARS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01HZWPFMERTFMTFQDEEQ", starsId: 596, name: "596 L-SIDS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01GB3TD593G7VMX3QF9E", starsId: 600, name: "600 M-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01G3VQ1GFHZ7QMYAWB7B", starsId: 601, name: "601 M-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01G73EY8WA4EZ0V44G4G", starsId: 602, name: "602 M-CLASS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01FR7V834GJXSC5YCZBQ", starsId: 603, name: "603 M-AMPH", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01EA56HD9D0JRH1Q2Y62", starsId: 610, name: "610 N-VFR-N", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01E3CENQ8FSAPCF75JAC", starsId: 611, name: "611 N-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01E0HB5WP7PC4SF5RR7G", starsId: 612, name: "612 N-CBA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01EES34R7AHJY3CRT16K", starsId: 613, name: "613 N-VFRSE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01EJBTSTKMER3YRQC15Z", starsId: 620, name: "620 O-CCA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01ETC4A94J735CE66ECK", starsId: 621, name: "621 O-RWYS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01EP3CB86EENJAVRF56E", starsId: 622, name: "622 O-HOSP", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01F7EM2JGNXD8JC6X0BW", starsId: 630, name: "630 P-RWY16", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01F33WZAYST4M2Z2N5BE", starsId: 632, name: "632 P-ODO", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01EZZDEZG75GEGA9E2S6", starsId: 631, name: "631 P-GEOG", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01DWAGW6AFPYF9XWQ215", starsId: 640, name: "640 Q-SCK", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01CTD067EKJKTHMDGV23", starsId: 650, name: "650 R-OBS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GEJWGFC1V10VRGDJEK59W5WZ", starsId: 651, name: "651 R-GPS", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01CN6236WQDYYCX6SFMB", starsId: 652, name: "652 HOSFOW", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01CJG84N5RBQTF6M7HAA", starsId: 653, name: "653 HOSFO19", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01CFR4QAXSEV1WH0RBWW", starsId: 654, name: "654 HOSFO10", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GNANZJZFYDNJSZN48RBEJXEH", starsId: 655, name: "655 CLASS_B", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GEJWAR2HZW2RT3SEQ00KDVK4", starsId: 656, name: "656 R-SFOW", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GEJWEQKGX9N3ZQQSTRT53A9R", starsId: 657, name: "657 R-SFOE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01DN2Y7SHJ7NDDHZQ3YP", starsId: 660, name: "660 S-SJC", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01D0XSYMREW4TKC40TM4", starsId: 661, name: "661 S-HIWAY", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01D4DV4KF09YY6Q5AECT", starsId: 662, name: "662 S-HOSP", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01D7PCHMVTJK0HT6M7TD", starsId: 663, name: "663 S-R12-A", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01DEVKQE7M3S0PF84GFY", starsId: 664, name: "664 S-R30-A", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01DBA9CN2BZXVES9SD0Z", starsId: 665, name: "665 S-R12-B", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01DJ727AQ2T11EFRET0K", starsId: 666, name: "666 S-R30-B", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV01DRZ7HFS3475667D72Z", starsId: 667, name: "667 S-XTCTR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0130BGWFDKE6V3BJJJND", starsId: 670, name: "670 T-RWY16", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0135HPBYQ47DEM152NFB", starsId: 671, name: "671 T-RWY34", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0148NEZ46DVFPQSYNPBB", starsId: 680, name: "680 U-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV014C8YBAB43CHB66SC94", starsId: 681, name: "681 U-ODO", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV0144K2E5SHXFQP47HGNH", starsId: 683, name: "683 ODO-DEP", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV014WBCRTECCEEHMM779J", starsId: 690, name: "690 V-VFR", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV014KZW494KVACPK1TPCG", starsId: 691, name: "691 V-CDA", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV014FBXTK0WJ2GJKM1KCS", starsId: 692, name: "692 V-ALT", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01GESV014QBHE3F5KDY5GKJG0R", starsId: 693, name: "693 V-ODO", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01H5WM9FBWCBXFWSGANN89A0M1", starsId: 11, name: "11 J-Q_RTE", bcg: "A", showDefault: false },
  { facility: "Northern California TRACON", id: "01H5WM9FBV2C3W0DXB9WD8ZMT3", starsId: 757, name: "757 E_MID", bcg: "B", showDefault: false },
  { facility: "Northern California TRACON", id: "01JKE7BPXQ42XV0CDR06TJPJ6A", starsId: 998, name: "998 RPO", bcg: "B", showDefault: false },
  // Travis AFB RAPCON
  { facility: "Travis AFB RAPCON", id: "01HAWKEZZMN0201T8FYVVH5QEQ", starsId: 53, name: "53 03L_ILS", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWKQYFTY2WA21QN2QFBDFG9", starsId: 54, name: "54 03L_TAC", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWKY61AA29116TT7TKHR6SW", starsId: 50, name: "50 21L_ILS", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWN1X0BHPHSE72YYN8Z3FHP", starsId: 51, name: "51 21L_TAC", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWN570ZN55FG3VT5M92YWWC", starsId: 56, name: "56 21R_TAC", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWN7KFRVNHY13XS2F4MQ9JZ", starsId: 1, name: "1 AIRSPAC", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWNEMAHNRMSF4NNABVRYDT3", starsId: 12, name: "12 SUU_MVA", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWNA22TTX2V5EK1QPSB1KQT", starsId: 11, name: "11 SFOBRAV", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HAWNHZ3M1633PANMQ5780V88", starsId: 43, name: "43 TAD_FIX", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP6NX93ZTGVYGKTVHXK", starsId: 52, name: "52 21L_GPS", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP7ZGXXQBNSGMBPS3M0", starsId: 57, name: "57 21R_GPS", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNDXEFVC7319PSGWHC2YY14", starsId: 55, name: "55 03L_GPS", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNGZ78CGK6P07ZNKRAQ", starsId: 2, name: "2 AIRWAYS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNWT6K7B09B8J285W88", starsId: 18, name: "18 APTNAME", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP809GR5RHP22Q48VW5", starsId: 58, name: "58 CC_GPS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP8Q5P1KA11X5SV28R4", starsId: 59, name: "59 CCR_LDA", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNWX38HYC80YEP89R5M", starsId: 22, name: "22 CCR_VOR", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCPAEHW6ZVD2YXYSVS4M", starsId: 61, name: "61 CCRE__", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCPB02Q0M4XTXADNG75G", starsId: 104, name: "104 COUNTYL", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNKCYQWWNG97TT8MRK5", starsId: 4, name: "4 DELTA_A", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNXBHT19WM4017001K0", starsId: 23, name: "23 DWA_GPS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP1TFZTBCT26XT3GRT9", starsId: 30, name: "30 DWA16DV", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP14HXM0TKAHE82BJTY", starsId: 31, name: "31 DWA34DV", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP43GC9TZ8FRG64BZGX", starsId: 39, name: "39 EDU_DVA", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNY8BEQ0DXPJH7WNXAZ", starsId: 24, name: "24 EDU_GPS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP48VZ4FKYDH5JPKD6W", starsId: 40, name: "40 FREQ", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNMQF4NED6CKEZ30GRQ", starsId: 5, name: "5 LABELS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNS2WH2PSK0H5Y3CXT3", starsId: 13, name: "13 MT_DIAB", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNSAY5B3354FTS2G9EM", starsId: 14, name: "14 NAPASH", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNYM7S25F51DDQQ2DZF", starsId: 25, name: "25 O41_GPS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP3EPWX312B8ETE5G2Z", starsId: 35, name: "35 OSVEE_1", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNPWYSBAAS52G61XJR3", starsId: 8, name: "8 SHORELN", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNV8Z93CS2W45G0CQ60", starsId: 15, name: "15 SMF_17", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP0CCVJPF9NPMFSK1TS", starsId: 29, name: "29 SMF_35", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP2HDWE5SVGSA05BSRR", starsId: 33, name: "33 SUTHU_1", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNQZS9C50QSRSQ383PC", starsId: 9, name: "9 SUU_DVA", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNHPJ7CCDWJMF66JF5R", starsId: 3, name: "3 SUU_EXT", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNVFJQS3GB0JDZY3T7E", starsId: 17, name: "17 SUU_WRA", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNNKWJPJYVE6DXQKHAZ", starsId: 7, name: "7 TWR", bcg: "A", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP3SMVV4YSDTRMGFQKZ", starsId: 38, name: "38 VCB_DVA", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCP5MAMA05NTMNNEGSC8", starsId: 42, name: "42 TAD_PIE", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNZXGF6ESS8B4D6217Y", starsId: 27, name: "27 VCB_GPS", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNZ09K851KA69NKA7NX", starsId: 28, name: "28 VCB_VOR", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HCNFSCNQPC0HHGY9WRHW31WN", starsId: 10, name: "10 WINDMIL", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HN61K3XGS78DJ4WV5Z87KV8T", starsId: 6, name: "6 SYS_MVA", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HN63ZZ0BK26XGZBCS5TZ1JV4", starsId: 32, name: "32 WEBGO_1", bcg: "B", showDefault: false },
  { facility: "Travis AFB RAPCON", id: "01HN63ZZ0A4H6C0QBPT277WSYN", starsId: 34, name: "34 PEBLL_1", bcg: "B", showDefault: false },
  // NAS Fallon RAPCON
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE6P0ARXZ3D0JYVPC23", starsId: 99, name: "99 NFL-MVA", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN94E7J39Q1S5JY79FPS7G3V", starsId: 103, name: "103 MVA", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE6EZFVK9X2JZP2V306", starsId: 9, name: "9 GPS-31L", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE7QFG2A0B3EFNXCST1", starsId: 50, name: "50 ADM-RVY", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE8QAPTS4QC464JBT6C", starsId: 41, name: "41 ALT7-25", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE80A8J466YPRD1SAWJ", starsId: 51, name: "51 AR-214", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE9V4J1P9ZRE3SDQ8SH", starsId: 45, name: "45 ARTCC", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEAEASX8R2N8AXADP6F", starsId: 40, name: "40 ASR-ALT", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE9JFTHCHFYRVZ95EEY", starsId: 16, name: "16 ASR13L", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEAGR3KDW0TNJ91YJF7", starsId: 17, name: "17 ASR13R", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKE9TVJVT3WCMGSSWMQX", starsId: 18, name: "18 ASR7-25", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEB20TZTYQ89DFHRD7Y", starsId: 56, name: "56 ATCAA", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEB2TBSPMEWZMR9P8CG", starsId: 57, name: "57 IDATCAA", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEZYY253FTD6CYCEHWH", starsId: 80, name: "80 ZIR", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEYEMXW782RESCWCW37", starsId: 48, name: "48 VR-RTE", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEY2F6X623E20PYCEVW", starsId: 14, name: "14 VOR-FLX", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEYBKJB4AWXXDXD5WJ9", starsId: 39, name: "39 VFR-COR", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEXMTBYBD8MRE2N0Q5D", starsId: 6, name: "6 CLASS-D", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEW0P8PF623ECW96QZ5", starsId: 19, name: "19 TRANOFF", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEWHC738T14815K0DGK", starsId: 107, name: "107 TPH-40", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEW1RYCFSQXQFGN2T4J", starsId: 12, name: "12 TA13R", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEWFQTDNE5WECKC397V", starsId: 13, name: "13 TA31L-R", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEVK1P398GBTEG4QC5D", starsId: 74, name: "74 S-SONIC", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEV3VD8AD2DWR1CS8T8", starsId: 75, name: "75 SUA-LAB", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEVQ8XBGE31JH480BJA", starsId: 42, name: "42 SIM-MAP", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKETDKP4VMBT84AWH1PJ", starsId: 46, name: "46 RNO-SEC", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKET246MD1F2B55VXFSX", starsId: 8, name: "8 GPS-13R", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKET9HWDC89H75Y6VWS1", starsId: 71, name: "71 RENO", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKES82HN64WE4MCQQWSW", starsId: 35, name: "35 RANCH-H", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKER9PM8PSER81QDTXXB", starsId: 34, name: "34 RANCH", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKERVWANRP1K4CBGARPQ", starsId: 31, name: "31 R4816S", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEQMFHHBD08MABDJYKW", starsId: 30, name: "30 R4816N", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEQRQ1PAREFKGEQR7SB", starsId: 29, name: "29 R4813", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEQ6W797B5RADTB5TAF", starsId: 28, name: "28 R4812", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEPFCHA0Z53CRBNA3JQ", starsId: 27, name: "27 R4810", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEP8N8Y2QDXN2D4JBSE", starsId: 26, name: "26 R4804A", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEPM05AFXRFV58NZKM2", starsId: 25, name: "25 R4803", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEN07XMZSYA99PFNAQN", starsId: 21, name: "21 PIGSHED", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93XVZZK87VGVPC1R3WV7JM", starsId: 7, name: "7 AIRWAYS", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEN0ME0DTPJXRY4KPK6", starsId: 49, name: "49 FTM", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEM2JZNCJGJ4DFM68JB", starsId: 1, name: "1 NFL-ASP", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEKQ1CJGPZNVWA4A33G", starsId: 106, name: "106 NFL-60", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEKQR016KT02EE3E60S", starsId: 37, name: "37 LAKES", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEKNSY8KCJSC4FM6YN5", starsId: 79, name: "79 LABEL-2", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEK7JCN338H68TRJBXA", starsId: 5, name: "5 ID", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEJHNR0MQ9JH24BZ4WA", starsId: 47, name: "47 IR-RTE", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEJKEPMEP4CV539YXVB", starsId: 11, name: "11 HITA31", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEJ3NAQ5H1W0B1PR1AT", starsId: 36, name: "36 HIGHWAY", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEJ68VXCMD63K1T2Y4X", starsId: 10, name: "10 HITA13R", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEH19RXBE5SGFH7RKCG", starsId: 20, name: "20 GPS-SPZ", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEH6XTY4YDYQDZY7YVT", starsId: 15, name: "15 GPS-FLX", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEHBA4A0BYYHWWD1V66", starsId: 2, name: "2 FRTC", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEGW3RNVX5G2ENN1Y4Z", starsId: 78, name: "78 FIXES-2", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEG6VXM2TV95TSGYP6D", starsId: 105, name: "105 FLX-40", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEFH2V4P7SZK7475B57", starsId: 4, name: "4 FIXES", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEFEYK6F0C3QGACXBS0", starsId: 77, name: "77 DESERT", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEF7J1SJVYS8STB6BD4", starsId: 100, name: "100 CTV", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEECV6081R6WSJFFFTZ", starsId: 33, name: "33 CHILL-L", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEE9R8MVGPDC5Q95FK1", starsId: 32, name: "32 CHILL-H", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKEDGN6WDA9QTFDVMFXP", starsId: 38, name: "38 COUNTY", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKECAZTAZZ0WT4B6GKVV", starsId: 60, name: "60 COM-RVY", bcg: "B", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKECQJK5FPBFG60J9GGY", starsId: 3, name: "3 NFL-RWY", bcg: "A", showDefault: false },
  { facility: "NAS Fallon RAPCON", id: "01HN93PKECG9BRJ2SD6Z13TXVQ", starsId: 104, name: "104 BAM-40", bcg: "B", showDefault: false },
  // NAS Lemoore RAPCON
  { facility: "NAS Lemoore RAPCON", id: "01HAWNKC87J6AHZ95K3J4H0V75", starsId: 1, name: "1 32_60NM", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEPM6BNGCYTQMBSDA80", starsId: 61, name: "61 5NM-MVA", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEQ5VDS8BZ8J71VXRZ9", starsId: 48, name: "48 FCH_MIS", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JERC5DJNF71E0HKQRBF", starsId: 47, name: "47 FCH_NDB", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JESH4WA95ZVK9WM4RCY", starsId: 41, name: "41 HTAZ14R", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEWJWTB8TH3H1E8R78R", starsId: 11, name: "11 AIRWAYS", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEV13V7J9GT052QKX42", starsId: 14, name: "14 _SUA_A_", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEWHEZQREE24B2DDENV", starsId: 17, name: "17 AIRPORT", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEXDVT7833CTGNZHWG2", starsId: 57, name: "57 AR667", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEYY5BJ75484XZ2KCHQ", starsId: 7, name: "7 _ARTCC_", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEZB5ZM0JSX5KSN7ECS", starsId: 22, name: "22 ASR-14L", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF01DYXWVD8TZ374Z8B", starsId: 23, name: "23 ASR-14R", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF0V1YEX1BJ172VJRQG", starsId: 20, name: "20 ASR-32L", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF1N0FKK2AHWHHA9244", starsId: 21, name: "21 ASR-32R", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF2RMG0FEJ7TGR422FX", starsId: 16, name: "16 CLASS_D", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF3TS4WPVN1BBTAB9D1", starsId: 44, name: "44 CNTYMAP", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF47TJ9H7WGS46VDNYV", starsId: 33, name: "33 DEMO14R", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF513CRZ5PCTJDYYEJ7", starsId: 34, name: "34 DEMO32R", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF6SX5HJHSHVVPQY5NJ", starsId: 18, name: "18 FAT_C", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF64941PCAQKYMQTMTG", starsId: 52, name: "52 GPS-14L", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF7QHVMZKHVNCK1QF7A", starsId: 53, name: "53 GPS-14R", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JF9Q7C9HCGWZ7ZWEHYK", starsId: 50, name: "50 GPS-32L", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFQ84KN2RQKVCK3PF9N", starsId: 19, name: "19 ZLA_27", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFNQMY9GTMW4VFJC5F4", starsId: 37, name: "37 TACY32L", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFMZTWX7AQTK3C7G1PD", starsId: 40, name: "40 TACY14R", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFKPSF9SZW26JCQ68YK", starsId: 39, name: "39 TACY14L", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFJ7T7YZ2ZY9RYD818K", starsId: 15, name: "15 SUA_D_E", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFGDTG3QAP365XJP7JY", starsId: 3, name: "3 RWY3220", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFFZYFTC05YZ35R3KQD", starsId: 4, name: "4 RWY1420", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFFQ0X6K6HZKD0RWT4H", starsId: 2, name: "2 14_60NM", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFEE3C8ZBFVGASV1A2A", starsId: 10, name: "10 ROADMAP", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFDAQ27AVFN4RNWQZ3P", starsId: 9, name: "9 RIVERS", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFBCVVKA7A25CWNN1VN", starsId: 35, name: "35 HTAX32L", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFA79YYRM82727ZA3FN", starsId: 51, name: "51 GPS-32R", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JEVRMDDPG80XMCFXTH5", starsId: 60, name: "60 3NM-MVA", bcg: "B", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JFDTXX6JTW41MFVKR4K", starsId: 6, name: "6 NLC_MOA", bcg: "A", showDefault: false },
  { facility: "NAS Lemoore RAPCON", id: "01HN6W0JETBHY11RVSET42JQ4J", starsId: 38, name: "38 HTAZ14L", bcg: "B", showDefault: false },
  // Bucholz ATCT
  { facility: "Bucholz ATCT", id: "01HSHJKBTV5CY3RRWH0ATRH83E", starsId: 2, name: "2 AIRSPCE", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBTYNSEKZN6G3HS8X7WF", starsId: 7, name: "7 KC6", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBTZG642D4Y5629KHSE0", starsId: 9, name: "9 KC24", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV1FPGMH5YF7WDP49MX", starsId: 10, name: "10 R04", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV2B3WNGENESP8MNZYF", starsId: 11, name: "11 R22", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV35RCFHAP7M4BN0XAR", starsId: 22, name: "22 GRID", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV4KKHWPBH1BHXKR08G", starsId: 20, name: "20 HELOPAD", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJPZN1FQ57P2GTJGP4W5Q3", starsId: 3, name: "3 AIRWAYS", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV57K5Z89SZBC7ED4N6", starsId: 12, name: "12 KWARW06", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV6EZ8E58E2B1HVZF6C", starsId: 13, name: "13 KWARW24", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV85WWTGGR86X5477W4", starsId: 25, name: "25 MIDATOL", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBV9KPXR8CFRNZFH4CCH", starsId: 4, name: "4 MVA-KWA", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBVA89Q74QZB5ATY2Y6G", starsId: 6, name: "6 K6", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBVA4HEGJHTT72BDDE6A", starsId: 8, name: "8 K24", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBVBXMPEAYMZYX4GTWDH", starsId: 21, name: "21 ROINOFL", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBVC2BKM67DR3J03NA2T", starsId: 14, name: "14 ROIRW04", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBVD6WWVXBYGGHXAAX8M", starsId: 15, name: "15 ROIRW22", bcg: "A", showDefault: false },
  { facility: "Bucholz ATCT", id: "01HSHJKBVE2KWZJBP5EVV9Q03P", starsId: 1, name: "1 RUNWAYS", bcg: "A", showDefault: false },
  // Oakland Bay TRACON
  { facility: "Oakland Bay TRACON", id: "01JHCQ52R8F34DFGM0AKN106Y0", starsId: 2, name: "2 EAST", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01JHCQHNC52BTXV89AKTHBSKQ0", starsId: 4, name: "4 HOLD", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01JHCPW7JS9TQS1DQJ99AM6SBK", starsId: 1, name: "1 WEST", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D555P5PN8DFTCB2KKQF9P2", starsId: 9, name: "9 CBA", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4VX9M388FQC0XMVT41EPW", starsId: 10, name: "10 LO_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4SQCZ8X4M1WKR9WSQZ6H9", starsId: 11, name: "11 HI_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE55DTFYQYEM1X3H7ZR", starsId: 110, name: "110 TOGA_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE3GY7SVVTQHVCPNETJ", starsId: 112, name: "112 LICKE_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE3K56NCEMR128PFJ9G", starsId: 114, name: "114 HOOKS_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE5MK888FMSVGMJ4J4R", starsId: 120, name: "120 WOODS_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE3DAR1F3QCHN4DEX1D", starsId: 122, name: "122 FOST_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE5MM7HJDP3P4ZSF74V", starsId: 125, name: "125 SFEED_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE4799AB4JFEFCND4WR", starsId: 127, name: "127 NFEED_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE48NPWDGW1KT4T93JG", starsId: 131, name: "131 MLFRD_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE32VAP2N2YGQKMP6N1", starsId: 133, name: "133 GROVE_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE54J9R030865PS8XYE", starsId: 141, name: "141 SUTRO_W", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE41MWRBRS29H7RD3HC", starsId: 143, name: "143 RCHMNDW", bcg: "A", showDefault: false },
  { facility: "Oakland Bay TRACON", id: "01K8D4ZVE2WXZTCF12H8RGCCPP", starsId: 145, name: "145 DIABLOW", bcg: "A", showDefault: false },
  // Sacramento TRACON
  { facility: "Sacramento TRACON", id: "01K89R8RK7DWGNKERWB0R31XJY", starsId: 1, name: "1 MCCS", bcg: "A", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89RGY5Q98E8JPBHXSDJJ4ZN", starsId: 2, name: "2 MVA", bcg: "B", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89RJNAA08F0X9912W4G9V1F", starsId: 3, name: "3 MCCN", bcg: "A", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89RQRS0JMR919F15YJ9MNDB", starsId: 5, name: "5 GEOG", bcg: "A", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89RSRM1NC1YT7SS07SPNN98", starsId: 6, name: "6 EOVM", bcg: "A", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89RXFNDWZTV2BSBRW238EK3", starsId: 7, name: "7 GPS", bcg: "A", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89RYK8HPZRY7NRJZJNRJX53", starsId: 8, name: "8 16_B33", bcg: "A", showDefault: false },
  { facility: "Sacramento TRACON", id: "01K89S09MC5EWRA32ZQ2BG3X71", starsId: 9, name: "9 34_B15", bcg: "A", showDefault: false },
  // Stockton ATCT
  { facility: "Stockton ATCT", id: "01K89RG42B7XGQVAFN8J2XT9FS", starsId: 1, name: "1 LO_W", bcg: "A", showDefault: false },
  { facility: "Stockton ATCT", id: "01K89RHSG0AVYCCRZSGQJ5J2CT", starsId: 2, name: "2 HI_W", bcg: "A", showDefault: false },
  { facility: "Stockton ATCT", id: "01K89RS4K6MDANSFA0X558JDMK", starsId: 5, name: "5 BAB", bcg: "A", showDefault: false },
  { facility: "Stockton ATCT", id: "01K89RWDMFWM1G49NA5ZKKFDQ9", starsId: 6, name: "6 MVA", bcg: "B", showDefault: false },
  { facility: "Stockton ATCT", id: "01K89RY1QYZBSPDWV07KAQP9M6", starsId: 7, name: "7 GPS", bcg: "A", showDefault: false },
  { facility: "Stockton ATCT", id: "01K89RZPAZJE81DYCDDJD26DPR", starsId: 8, name: "8 EOVM", bcg: "A", showDefault: false },
  { facility: "Stockton ATCT", id: "01K89RPRQM1ZW4F9DXBE7PF10C", starsId: 3, name: "3 LO_SE", bcg: "A", showDefault: false },
  { facility: "Stockton ATCT", id: "01K8C9HS6SQ579P2SY5CSPMZWD", starsId: 4, name: "4 HI_SE", bcg: "A", showDefault: false },
  // Monterrey ATCT
  { facility: "Monterrey ATCT", id: "01K89RE0BQR5WN55YBSY5GWFE0", starsId: 1, name: "1 MRY28", bcg: "A", showDefault: false },
  { facility: "Monterrey ATCT", id: "01K89RKR12ST85VXB5WXFTV7Z3", starsId: 3, name: "3 EOVM", bcg: "A", showDefault: false },
  { facility: "Monterrey ATCT", id: "01K89RV3JZVHMEEMY78F4H388G", starsId: 6, name: "6 ASPC", bcg: "A", showDefault: false },
];

export const VNAS_MAP_GROUPS: VnasMapGroup[] = [
  { facility: "Fresno ATCT", tcps: ["1F", "1H", "1S", "1T"], mapIds: [321, 323, 322, 328, 330, 327, 329, 324, 320, 325, 326, 331, 332, 333, 334, 335, 336, 337, 338, 339, 343, 340] },
  { facility: "Northern California TRACON", tcps: ["2B", "2F", "2G", "2I", "2N", "2W", "2Z"], mapIds: [3, 5, 63, 4, 26, 8, 1, 2, 6, 7, 9, 10, 13, 14, 15, 16, 17, 18, 19, 23, 28, 31, 34, 41, 42, 43, 45, 61, 65, 67] },
  { facility: "Northern California TRACON", tcps: ["2M", "2P", "2V", "2X", "2Y"], mapIds: [656, 657, 3, 651, 6, 15, 1, 2, 4, 5, 8, 650, 652, 653, 654, 9, 10, 11, 16, 21, 22, 24, 25, 31, 34, 35, 41, 42, 43, 45, 46, 655] },
  { facility: "Northern California TRACON", tcps: ["2S"], mapIds: [690, 691, 692, 6, 1, 2, 3, 7, 15, 21, 26, 27, 693, 5] },
  { facility: "Northern California TRACON", tcps: ["1F", "1L", "1S", "1T"], mapIds: [3, 5, 7, 6, 21, 4, 1, 2, 8, 9, 10, 11, 13, 15, 16, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["1J", "1X"], mapIds: [667, 3, 664, 663, 6, 662, 660, 661, 666, 665, 1, 2, 7, 15, 26, 27, 5] },
  { facility: "Northern California TRACON", tcps: ["1K"], mapIds: [3, 5, 7, 6, 21, 25, 1, 2, 4, 8, 9, 10, 11, 13, 15, 16, 22, 23, 24, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["1M"], mapIds: [3, 5, 7, 6, 15, 8, 1, 2, 4, 9, 10, 11, 13, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["1N"], mapIds: [580, 581, 27, 586, 584, 585, 26, 582, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["1P"], mapIds: [600, 602, 6, 3, 1, 2, 601, 7, 15, 26, 27, 5] },
  { facility: "Northern California TRACON", tcps: ["1Q"], mapIds: [3, 5, 7, 4, 15, 8, 1, 2, 6, 9, 10, 11, 13, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["1R"], mapIds: [610, 611, 27, 613, 1, 2, 3, 7, 6, 15, 26, 5] },
  { facility: "Northern California TRACON", tcps: ["1Y"], mapIds: [680, 683, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["1Z"], mapIds: [570, 571, 572, 573, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["3A", "3O"], mapIds: [590, 3, 592, 593, 595, 596, 591, 594, 6, 4, 5, 15, 1, 2, 26, 27] },
  { facility: "Northern California TRACON", tcps: ["3E"], mapIds: [530, 531, 532, 533, 1, 2, 3, 7, 6, 15, 26, 27, 5] },
  { facility: "Northern California TRACON", tcps: ["3G"], mapIds: [3, 5, 65, 6, 9, 1, 2, 13, 15, 8, 4, 17, 10, 11, 16, 7, 25, 54, 28, 26, 66, 710, 727, 722, 732, 772, 770, 765, 775] },
  { facility: "Northern California TRACON", tcps: ["3J", "3Y"], mapIds: [3, 5, 65, 6, 9, 1, 2, 13, 15, 8, 4, 17, 10, 11, 16, 7, 23, 25, 66, 54, 41, 43, 45, 730, 780, 751, 756] },
  { facility: "Northern California TRACON", tcps: ["3K"], mapIds: [3, 5, 7, 6, 65, 1, 2, 13, 15, 8, 4, 17, 9, 10, 11, 16, 66, 25, 718, 719, 730, 780] },
  { facility: "Northern California TRACON", tcps: ["3L"], mapIds: [540, 541, 542, 27, 544, 545, 26, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["3P"], mapIds: [1, 2, 3, 7, 6, 15, 560, 5] },
  { facility: "Northern California TRACON", tcps: ["3S"], mapIds: [3, 5, 7, 43, 9, 1, 10, 13, 15, 6, 8, 4, 17, 2, 11, 16, 23, 65, 41, 45, 780, 727, 777, 729, 779, 746, 796] },
  { facility: "Northern California TRACON", tcps: ["3Z"], mapIds: [640, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["4A", "4D", "4F", "4K", "4R", "4U", "4W"], mapIds: [3, 5, 8, 4, 6, 67, 1, 2, 7, 9, 10, 11, 13, 15, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["4B"], mapIds: [520, 521, 522, 523, 1, 2, 3, 7, 6, 15, 26, 27, 5] },
  { facility: "Northern California TRACON", tcps: ["4P"], mapIds: [500, 501, 502, 503, 504, 15, 1, 2, 7, 6, 5] },
  { facility: "Northern California TRACON", tcps: ["4T"], mapIds: [490, 491, 492, 493, 494, 495, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["5B", "5D", "5E", "5N", "5P", "5T", "5X", "7A", "7Q", "8N", "8S", "8Y"], mapIds: [3, 5, 7, 4, 13, 6, 1, 2, 8, 9, 10, 11, 15, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["5M"], mapIds: [550, 551, 1, 2, 21, 22, 3, 7, 6, 15, 552, 5] },
  { facility: "Northern California TRACON", tcps: ["5S"], mapIds: [510, 511, 512, 513, 514, 515, 516, 3, 1, 2, 21, 22, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["5U"], mapIds: [510, 511, 512, 513, 514, 515, 516, 3, 1, 2, 21, 22, 6, 15, 7, 517, 5] },
  { facility: "Northern California TRACON", tcps: ["5V"], mapIds: [670, 671, 1, 2, 3, 7, 6, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["5Z"], mapIds: [631, 630, 1, 2, 3, 7, 6, 15, 632, 5] },
  { facility: "Northern California TRACON", tcps: ["70", "71", "7X", "7Y", "7Z"], mapIds: [6, 15, 8, 1, 2, 3, 4, 5, 7, 9, 10, 11, 13, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44] },
  { facility: "Northern California TRACON", tcps: ["7D", "7E", "7F"], mapIds: [3, 5, 7, 4, 15, 6, 1, 2, 8, 9, 10, 13, 14, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["7G"], mapIds: [3, 5, 1, 2, 6, 7, 4, 8, 9, 10, 13, 14, 15, 16, 21, 22, 23, 24, 25, 31, 34, 35, 36, 41, 42, 43, 44, 45, 46] },
  { facility: "Northern California TRACON", tcps: ["8E", "8R"], mapIds: [620, 621, 622, 6, 1, 2, 3, 7, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["8L"], mapIds: [470, 3, 471, 6, 472, 15, 8, 4, 17, 7, 5] },
  { facility: "Northern California TRACON", tcps: ["8O"], mapIds: [480, 3, 481, 6, 1, 2, 21, 22, 7, 15, 5] },
  { facility: "Northern California TRACON", tcps: ["3M"], mapIds: [3, 5, 65, 6, 9, 1, 2, 13, 15, 8, 4, 17, 10, 11, 16, 7, 25, 54, 28, 26, 66, 710, 727, 722, 732, 772, 770, 765, 775] },
  { facility: "Travis AFB RAPCON", tcps: ["1A", "1N", "1S"], mapIds: [1, 15, 3, 29, 12, 6, 50, 53, 51, 54, 52, 55, 56, 14, 57, 58, 59, 22, 23, 24, 25, 9, 27, 28, 17, 40, 32, 33, 34, 35, 2, 18, 11] },
  { facility: "Travis AFB RAPCON", tcps: ["1Z"], mapIds: [7, 1, 3, 18, 50, 53, 51, 54, 52, 55, 17, 56, 104, 57, 8, 12, 6, 9, 24, 58, 25, 59, 22, 28, 23] },
  { facility: "NAS Fallon RAPCON", tcps: ["1A", "1B", "1D", "1E", "1F", "1G"], mapIds: [35, 1, 46, 3, 7, 77, 78, 79, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34] },
  { facility: "NAS Fallon RAPCON", tcps: ["1T"], mapIds: [6, 1, 3, 4, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 40, 41] },
  { facility: "NAS Lemoore RAPCON", tcps: ["1A"], mapIds: [35, 38, 39, 37, 52, 50, 41, 51, 40, 53, 1, 2, 3, 4, 17, 11, 60, 61, 7, 33, 16, 15, 14] },
  { facility: "NAS Lemoore RAPCON", tcps: ["1D"], mapIds: [1, 2, 60, 4, 34, 61, 14, 17, 15, 10, 16, 9, 33, 57, 7, 11, 47, 35, 48, 18, 38] },
  { facility: "NAS Lemoore RAPCON", tcps: ["1M"], mapIds: [1, 35, 2, 6, 38, 14, 41, 15, 17, 16, 11, 7, 57, 19, 60, 10, 61, 33, 34] },
  { facility: "NAS Lemoore RAPCON", tcps: ["1L", "1R"], mapIds: [1, 2, 3, 4, 37, 40, 50, 52, 51, 53, 16, 41, 35, 17, 60, 61] },
  { facility: "NAS Lemoore RAPCON", tcps: ["1Y", "1Z"], mapIds: [1, 38, 2, 40, 3, 41, 4, 50, 60, 51, 10, 52, 16, 53, 17, 33, 34, 35, 37] },
  { facility: "Bucholz ATCT", tcps: ["1E", "1M", "1P", "1T"], mapIds: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 25] },
  { facility: "Oakland Bay TRACON", tcps: ["1B", "1D", "1F", "1G", "1K", "1L", "1M", "1N", "1R", "1T", "1U", "1W"], mapIds: [1, 2, 3, 4, 5, 9, 10, 11, 110, 112, 114, 120, 122, 125, 127, 131, 133, 141, 143, 145, 999] },
  { facility: "Oakland Bay TRACON", tcps: ["1A", "1E", "1H", "1J", "1O", "1P", "1Q", "1S", "1V", "1X", "1Y", "1Z"], mapIds: [1, 2, 3, 4, 5, 9, 999] },
  { facility: "Sacramento TRACON", tcps: ["1B", "1D", "1E", "1M", "1P", "1T", "1V", "1X", "1Z"], mapIds: [1, 2, 3, 5, 6, 7, 8, 9] },
  { facility: "Stockton ATCT", tcps: ["1J", "1K", "1L", "1P", "1Y", "1Z"], mapIds: [1, 2, 3, 4, 6, 8, 5, 7, 999] },
  { facility: "Monterrey ATCT", tcps: ["1F", "1S", "1Y", "1Z"], mapIds: [1, 6, 103, 3, 999] },
];

///////////////////////////////////////////////////
// ERAM GeoMaps (ZOA Center scope)
///////////////////////////////////////////////////
export const VNAS_GEO_MAPS: VnasGeoMap[] = [
  { name: "ZOAHI", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "3 NM", "MVA", "ZLA230", "", "", "STRATUM", "", "", "", "", "", "", "TDM", "", "", "", "", "", "", "", "", "", "TDM LBL"], mapIds: ["01HA7QZJ0G6TG3Y03JYAQ6RSF9", "01HBH3SNA260G6T1ZJP197NNA3", "01HHFWB88TJPAHJF80Q1Y0EBPP", "01HHFWB88XZ5BEAFF9GNSBHS2D", "01HHFWB88XRZASKDF45SWT1ZR3", "01HHFWB88YZRV7DKS2TJ3BFR16", "01HHFWB88YRFEXV9C0Y2KC6VT3", "01HHFWB88ZVCN032FP7YG8GE29", "01HHFWB88ZRFV2CBMEKGX2HDAJ", "01HHFWB890HC12MTJSAVFATPYX", "01HHFWB88Z8YD2HXVTEMPR7J9M", "01HHFWB890M4KW6T444EH7BT49", "01HHFWB89182HZC708CN8NQXVR", "01HHFWB891N70CK700EA906YYX", "01HHFWB892VTJN4ANT3T7868DZ", "01HHFWB892ZKVMM0W87G8PK9JN", "01HHFWB8943PKY7BHMHEY16RJQ", "01HHFWB8939NFRHKR7AGZCC1Y7", "01HHFWB894PM3PK65PTQT4TNKH", "01HHFWB8963PQKVF3JVVJKMG93", "01HHFWB896VEAS77GXXB95H8VR", "01HHFWB895JSTGE467C98K7MHG", "01K8A7HTH9ND9HTTGJH04FEPHP"] },
  { name: "ZOALOW", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "IAPFIX", "", "", "STRATUM", "", "", "", "", "", "", "TDM", "", "", "", "", "", "", "", "", "", "TDM LBL"], mapIds: ["01HHG360KP1K3SVXAG0KPYV5Q7", "01HHG360KPZEWFKVMWFJXYZWJJ", "01HHG360KPV0TWD0BZQHEWHBMG", "01HHG360KQVXRM5Y8PP8FP1GCT", "01HHG360KQE140JTBYYA57A6R5", "01HHG360KRT42PKQBVBE1T8Q81", "01HHG360KR7578XEQT5H8QRY4A", "01HHG360KRRA5Z50F3FN7BN5D4", "01HHG360KR0SSJSAP9D8R6NCY9", "01HHG360KRMKG5Z2PHS72GBHFS", "01HHG360KS8K3DJ7PQ3V96VCV7", "01HHG360KS8G0HKTXW60WC3QB1", "01HHG360KSRDDMJ8C148AD178T", "01HHG360KSZ65N004JK9356H67", "01HHG360KTQNV0KSN1A5SESM9J", "01HHG360KT60A9NE37STRJSMAW", "01HHG360KT28Z9EM2PAAKP755Q", "01HHG360KTWV6XVY7YGG27J1G1", "01HHG360KTAZSGTP1AB1Y7JD8Z", "01HHG360KTPWCYCMAA91RR7MD5", "01HHG360KVYZK3GHG4M9CR1RR6", "01HA7QZJ0G6TG3Y03JYAQ6RSF9", "01HBH3SNA260G6T1ZJP197NNA3", "01K8A7HTH9ND9HTTGJH04FEPHP"] },
  { name: "MIDTIER", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "NCT W_S", "FAT 29", "STRATUM", "", "", "", "", "", "", "TDM", "NCT E_N", "FAT 11", "OLDAPCH", "", "", "", "", "", "", "TDM LBL"], mapIds: ["01HJMYFJZ8RJD379S9G9PH9NNX", "01HJMYFJZ9P5N1E4ZGTRTZK2SA", "01HJMYFJZ9SMHWGR4MTAR7ZW0G", "01HJMYFJZ9QJJ68DPRDHWMPMD8", "01HJMYFJZARJM3EVF6NG9WYXY7", "01HJMYFJZARV3ZWGZ5MF14KYGN", "01HJMYFJZA70PJG3N1XW05P67W", "01HJMYFJZAD466J4YFWTJF3MBP", "01HJMYFJZATA9AFX05X8QVB67V", "01HJMYFJZABBF6CHMFSQXNVZN7", "01HJMYFJZAG53V5ZJ1X5963TR0", "01HJMYFJZA7G8VK10NZ6SER7PK", "01HJMYFJZAK6ZZ7PDMVQA0PKCP", "01HJMYFJZAD7WJ8P6QTEG312RW", "01HJMYFJZA9K5VR27XWZSNX7VZ", "01HJMYFJZA72XRGXF6FA3N5MHW", "01HJMYFJZAE4FDRATRZBDMB910", "01HJMYFJZAQM1AF3MN64QNQRYY", "01HJMYFJZA6ER5F7VYT2MRBX0N", "01HA7QZJ0G6TG3Y03JYAQ6RSF9", "01HBH3SNA260G6T1ZJP197NNA3", "01K8A7HTH9ND9HTTGJH04FEPHP"] },
  { name: "NORLOW", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "STS DP", "NORTH", "GPS", "GEO", "", "HELO", "MVA", "LOC", "", "", "STRATUM", "", "", "", "", "", "", "TDM", "", "", "", "", "", "", "", "", "", "TDM LBL"], mapIds: ["01HA7QZJ0G6TG3Y03JYAQ6RSF9", "01HJMYG57YJT0Y6839KG048H63", "01HJMYG57Y97QP8QP50152WX0C", "01HJMYG57Y9V93CHMCTQEDSWKY", "01HJMYG57Y35FX79XW677G50EH", "01HJMYG57YPY1NZ55HMDTZYX49", "01HJMYG57ZZQTRBJ16CTAXF4E2", "01HJMYG57ZEP7YV24XRKFNFT03", "01HJMYG57Z6EHQMEQX0WAYRSPQ", "01HJMYG57ZGKY0WEXDXWT5KDM5", "01HJMYG57ZBXWW7RQEC6VRHTDE", "01HJMYG57ZATPG7M99QQS2KZVJ", "01HJMYG57ZZBK4Q8EMSEQAA7P9", "01HJMYG57Z97GTV7WEJWF9FY3C", "01HJMYG57ZKP57ES3KJAXXA7BR", "01HJMYG57Z3F88MF74VQ1QSPYG", "01HJMYG57Z0WX4GZV8KVVDJE4P", "01HJMYG57ZW62B9CAKS3NAVAVN", "01HJMYG57Z9H9ZHWK5YF1NX7G8", "01HJMYG57ZSSCX7RTEV9ZV2B3G", "01HJMYG580W35JMZSS3A823Z30", "01HJMYG580ZTKK8SND40QW7CPD", "01HBH3SNA260G6T1ZJP197NNA3", "01K8A7HTH9ND9HTTGJH04FEPHP"] },
  { name: "SEZOAHI", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "3 NM", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYJ3Q82J72HDNDQN79CQVA", "01HJMYJ3Q85FZ0H0N9XX9HWEK8", "01HJMYJ3Q8B3QRH8D5ZX24EH7K", "01HJMYJ3Q8CR80PV0EDX45CYHX", "01HJMYJ3Q86ZMPVQ4WD7Y47AF2", "01HJMYJ3Q8P13TXXE9D2FV7N5K", "01HJMYJ3Q8885YZ6ZN9VTJVXR3", "01HJMYJ3Q811ZB9T8KRW2XRAK3", "01HJMYJ3Q87001F6F6V7WG52BC", "01HJMYJ3Q822YHAW3DSBGFD7NJ", "01HJMYJ3Q8SY4MVG7QP258E8JB", "01HJMYJ3Q89GD0AZHWY63W2YY8", "01HJMYJ3Q8VQW8RY9SWXR1RR02", "01HJMYJ3Q84AMBSBG0F6A8RAH4", "01HJMYJ3Q8QDN92DB24N3XRJA5", "01HJMYJ3Q8KJ19SW5BDGJMSC1F", "01HJMYJ3Q9FQR74MKA8R1DHCJC", "01HJMYJ3Q95A9SQ09R8A2J5TDD", "01HJMYJ3Q9SMT97V3ZXN7VH7PF", "01HJMYJ3Q9GQ1XV34AAZ2A44FK"] },
  { name: "CERTMAP", bcgMenu: ["RADAR", "RDR ID", "STATE", "ADSB", "LOW", "RCAG", "VOR", "8", "9", "10", "RDR TST", "12", "13", "ADS LBL", "HIGH", "RCG LBL", "VOR LBL", "18", "19", "20", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYDX3KRWG5YP8B2EQH1CQ0", "01HJMYDX3KHD5XGTXM7ZJZBBHH", "01HJMYDX3KMCZ12K589WQ6JSBQ", "01HJMYDX3M8JA71RCEX6XTQ5VV", "01HJMYDX3M33ESKGFQRZZY6RYS", "01HJMYDX3MVDNNN92Q7PJ26AWD", "01HJMYDX3MRFTVE5A0M25007VB", "01HJMYDX3MA1SV6HYEVFTY2JPM", "01HJMYDX3MQHRMQ3PBJCSXYYW1", "01HJMYDX3MMRBMJKQ39C5T1752", "01HJMYDX3MNN26FNEKTB9P8BD4"] },
  { name: "DARCBOX", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYED77CDS1DNP3Z7RT5TN1", "01HJMYED765FEVNT8YD6F2TSMP"] },
  { name: "GPDMAP", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYERGPFAT5RD0DST5PNCSJ"] },
  { name: "OLCMAP", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYGJZGK6K303TH4XZT9CPN", "01HJMYGJZGJCHH85C8KEVKMEP9", "01HJMYGJZGAXV54K2XXBHMQ41P"] },
  { name: "RADBOUND", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYH1PP5MQRW2DH9X8017TC", "01HJMYH1PPS30EXVC1KNG5FKHS"] },
  { name: "SBSOLC", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "ADSB 1", "ADSB 2", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYHE5Y5SH0M5Q6FMTYQF5F", "01HJMYHE5ZQ600QCQEMAAYWZ0X", "01HJMYHE5ZHZC8ZWYEGHC7E303", "01HJMYHE5ZG3W98HAJ8V13E6DF"] },
  { name: "TTL42", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYJKTD8Q1WSNMHB48HQ266", "01HJMYJKTDH4Y0PX4P6XM6FZVH", "01HJMYJKTDPFHSX7D2W4QNZW32", "01HJMYJKTDDVN8XXACSBPJFF7V", "01HJMYJKTDGPA2RYJRXDP4SPVJ", "01HJMYJKTDJ412J6M60CTDT23R", "01HJMYJKTE3DFFZBQ2D0DKYJDJ", "01HJMYJKTETX9TZKR35DN66SFX", "01HJMYJKTERN13RRMW2B93J507", "01HJMYJKTEQW83PQ3SV12MPQTK", "01HJMYJKTE1J6KF6F7Z7TQ63K1", "01HJMYJKTETM4GV8VBPV9J5VDG", "01HJMYJKTEX32BJDM3QMHSE7MC", "01HJMYJKTE9H4JFBQM95KEG5F4", "01HJMYJKTEH4NX8CZ9SP25G38H", "01HJMYJKTEBNE7KWBDQJ6901B5", "01HJMYJKTEQFP1MY4GE1G99YPD"] },
  { name: "ZOATRN", bcgMenu: ["SECTOR", "VICTOR", "JET", "QROUTE", "AIRPORT", "APCHMIL", "MIL", "ID", "MIA", "MIA ALT", "WESTNCT", "EASTNCT", "EAST", "NORTH", "SOUTH", "PAC N", "PAC S", "HELO", "MVA", "ZLA230", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], mapIds: ["01HJMYPSG0MRJAC6F89QWRDHEX", "01HJMYPSG00NR5PSR4KMV9EMW4"] },
];

///////////////////////////////////////////////////
// Center Maps
///////////////////////////////////////////////////
const CENTER_AREA_NORTH_POLYS: CenterAreaDefinition = {
  name: 'Area North',
  sectors: [
    {
      sectorName: '29',
      defaultColor: '#e60049',
      polyUrl: sector29,
    },
    {
      sectorName: '32',
      defaultColor: '#0bb4ff',
      polyUrl: sector32,
    },
    {
      sectorName: '40',
      defaultColor: '#e6d800',
      polyUrl: sector40,
    },
    {
      sectorName: '41',
      defaultColor: '#fd9a5c',
      polyUrl: sector41,
    },
    {
      sectorName: '42',
      defaultColor: '#5100e6',
      polyUrl: sector42,
    },
    {
      sectorName: '43',
      defaultColor: '#621065',
      polyUrl: sector43,
    },
  ],
};

const CENTER_AREA_EAST_POLYS: CenterAreaDefinition = {
  name: 'Area East',
  sectors: [
    {
      sectorName: '30',
      defaultColor: '#31754f',
      polyUrl: sector30,
    },
    {
      sectorName: '33',
      defaultColor: '#674040',
      polyUrl: sector33,
    },
    {
      sectorName: '34',
      defaultColor: '#1abdaa',
      polyUrl: sector34,
    },
    {
      sectorName: '44',
      defaultColor: '#bca843',
      polyUrl: sector44,
    },
    {
      sectorName: '45',
      defaultColor: '#a30707',
      polyUrl: sector45,
    },
    {
      sectorName: '46',
      defaultColor: '#141955',
      polyUrl: sector46,
    },
  ],
};

const CENTER_PAC_NORTH_POLYS: CenterAreaDefinition = {
  name: 'Pac North',
  sectors: [
    {
      sectorName: '31',
      defaultColor: '#7D7F7D',
      polyUrl: sector31,
    },
    {
      sectorName: '36',
      defaultColor: '#FAD201',
      polyUrl: sector36,
    },
  ],
};

const CENTER_PAC_SOUTH_POLYS: CenterAreaDefinition = {
  name: 'Pac South',
  sectors: [
    {
      sectorName: '14',
      defaultColor: '#721422',
      polyUrl: sector14,
    },
    {
      sectorName: '35',
      defaultColor: '#2271B3',
      polyUrl: sector35,
    },
  ],
};

const CENTER_AREA_SOUTH_POLYS: CenterAreaDefinition = {
  name: 'Area South',
  sectors: [
    {
      sectorName: '10',
      defaultColor: '#317F43',
      polyUrl: sector10,
    },
    {
      sectorName: '11',
      defaultColor: '#1D1E33',
      polyUrl: sector11,
    },
    {
      sectorName: '13',
      defaultColor: '#e47070',
      polyUrl: sector13,
    },
    {
      sectorName: '15',
      defaultColor: '#a35b01',
      polyUrl: sector15,
    },
    {
      sectorName: '16',
      defaultColor: 'rgba(46,44,44,0.99)',
      polyUrl: sector16,
    },
    {
      sectorName: '22',
      defaultColor: '#8ce142',
      polyUrl: sector22,
    },
  ],
};

export const CENTER_POLY_DEFINITIONS = [
  CENTER_AREA_NORTH_POLYS,
  CENTER_AREA_EAST_POLYS,
  CENTER_AREA_SOUTH_POLYS,
  CENTER_PAC_NORTH_POLYS,
  CENTER_PAC_SOUTH_POLYS,
];

///////////////////////////////////////////////////
// Tracon Maps
///////////////////////////////////////////////////
const E_NV_POLYS: TraconAreaPolys = {
  name: 'Area E NV',
  defaultConfig: 'RNOS',
  possibleConfigs: ['RNOS', 'RNON'],
  sectorConfigs: [
    {
      sectorName: 'Nugget',
      defaultColor: '#e60049',
      configPolyUrls: [
        {
          configs: ['RNOS', 'RNON'],
          url: nugget,
        },
      ],
    },
    {
      sectorName: 'Silver',
      defaultColor: '#0bb4ff',
      configPolyUrls: [
        {
          configs: ['RNOS', 'RNON'],
          url: silver,
        },
      ],
    },
  ],
};

const E_CA_POLYS: TraconAreaPolys = {
  name: 'Area E CA',
  defaultConfig: 'SMFS',
  possibleConfigs: ['SMFS', 'SMFN'],
  sectorConfigs: [
    {
      sectorName: 'Paradise',
      defaultColor: '#e6d800',
      configPolyUrls: [
        {
          configs: ['SMFS'],
          url: smfsParadise,
        },
        {
          configs: ['SMFN'],
          url: smfnParadise,
        },
      ],
    },
    {
      sectorName: 'Elkhorn',
      defaultColor: '#50e991',
      configPolyUrls: [
        {
          configs: ['SMFS'],
          url: smfsElkhorn,
        },
        {
          configs: ['SMFN'],
          url: smfnElkhorn,
        },
      ],
    },
  ],
};

const D_POLYS: TraconAreaPolys = {
  name: 'Area D',
  defaultConfig: 'SFOW',
  possibleConfigs: ['SFOW', 'SFOE', 'OAKE'],
  sectorConfigs: [
    {
      sectorName: 'Richmond',
      defaultColor: '#fd9a5c',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowRichmond,
        },
        {
          configs: ['SFOE'],
          url: sfoeRichmond,
        },
        {
          configs: ['OAKE'],
          url: oakeRichmond,
        },
      ],
    },
    {
      sectorName: 'Sutro',
      defaultColor: '#5100e6',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowSutro,
        },
        {
          configs: ['SFOE'],
          url: sfoeSutro,
        },
        {
          configs: ['OAKE'],
          url: oakeSutro,
        },
      ],
    },
  ],
};

const A_POLYS: TraconAreaPolys = {
  name: 'Area A',
  defaultConfig: 'SFOW',
  possibleConfigs: ['SFOW', 'SFOE', 'SJCE'],
  sectorConfigs: [
    {
      sectorName: 'Morgan',
      defaultColor: '#621065',
      configPolyUrls: [
        {
          configs: ['SFOW', 'SFOE', 'SJCE'],
          url: morgan,
        },
      ],
    },
    {
      sectorName: 'Seca',
      defaultColor: '#31754f',
      configPolyUrls: [
        {
          configs: ['SFOW', 'SFOE', 'SJCE'],
          url: seca,
        },
      ],
    },
    {
      sectorName: 'Toga',
      defaultColor: '#674040',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowToga,
        },
        {
          configs: ['SFOE'],
          url: sfoeToga,
        },
        {
          configs: ['SJCE'],
          url: sjceToga,
        },
      ],
    },
    {
      sectorName: 'Licke',
      defaultColor: '#1abdaa',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowLicke,
        },
        {
          configs: ['SFOE'],
          url: sfoeLicke,
        },
        {
          configs: ['SJCE'],
          url: sjceLicke,
        },
      ],
    },
  ],
};

const C_POLYS: TraconAreaPolys = {
  name: 'Area C',
  defaultConfig: 'SFOW',
  possibleConfigs: ['SFOW', 'SFOE', 'SFO10', 'OAKE'],
  sectorConfigs: [
    {
      sectorName: 'Valley',
      defaultColor: '#bca843',
      configPolyUrls: [
        {
          configs: ['SFOW', 'OAKE'],
          url: sfowValley,
        },
        {
          configs: ['SFOE', 'SFO10'],
          url: sfoeValley,
        },
      ],
    },
    {
      sectorName: 'Grove',
      defaultColor: '#a30707',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowGrove,
        },
        {
          configs: ['SFOE'],
          url: sfoeGrove,
        },
        {
          configs: ['SFO10'],
          url: sfo10Grove,
        },
        {
          configs: ['OAKE'],
          url: oakeGrove,
        },
      ],
    },
    {
      sectorName: 'Sunol',
      defaultColor: '#141955',
      configPolyUrls: [
        {
          configs: ['SFOW', 'OAKE'],
          url: sfowSunol,
        },
        {
          configs: ['SFOE', 'SFO10'],
          url: sfoeSunol,
        },
      ],
    },
  ],
};

const B_POLYS: TraconAreaPolys = {
  name: 'Area B',
  defaultConfig: 'SFOW',
  possibleConfigs: ['SFOW', 'SFOE', 'SFO10', 'OAKE'],
  sectorConfigs: [
    {
      sectorName: 'Boulder',
      defaultColor: '#7D7F7D',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowBoulder,
        },
        {
          configs: ['SFOE'],
          url: sfoeBoulder,
        },
        {
          configs: ['SFO10'],
          url: sfo10Boulder,
        },
        {
          configs: ['OAKE'],
          url: oakeBoulder,
        },
      ],
    },
    {
      sectorName: 'Cedar',
      defaultColor: '#FAD201',
      configPolyUrls: [
        {
          configs: ['SFOW', 'OAKE'],
          url: sfowCedar,
        },
        {
          configs: ['SFOE', 'SFO10'],
          url: sfoeCedar,
        },
      ],
    },
    {
      sectorName: 'Foster',
      defaultColor: '#721422',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowFoster,
        },
        {
          configs: ['SFOE'],
          url: sfoeFoster,
        },
        {
          configs: ['SFO10'],
          url: sfo10Foster,
        },
        {
          configs: ['OAKE'],
          url: oakeFoster,
        },
      ],
    },
    {
      sectorName: 'Laguna',
      defaultColor: '#2271B3',
      configPolyUrls: [
        {
          configs: ['SFOW', 'OAKE'],
          url: sfowLaguna,
        },
        {
          configs: ['SFOE', 'SFO10'],
          url: sfoeLaguna,
        },
      ],
    },
    {
      sectorName: 'Niles',
      defaultColor: '#317F43',
      configPolyUrls: [
        {
          configs: ['SFOW', 'OAKE'],
          url: sfowNiles,
        },
        {
          configs: ['SFOE'],
          url: sfoeNiles,
        },
        {
          configs: ['SFO10'],
          url: sfo10Niles,
        },
      ],
    },
    {
      sectorName: 'Woodside',
      defaultColor: '#1D1E33',
      configPolyUrls: [
        {
          configs: ['SFOW', 'OAKE'],
          url: sfowWoodside,
        },
        {
          configs: ['SFOE'],
          url: sfoeWoodside,
        },
        {
          configs: ['SFO10'],
          url: sfo10Woodside,
        },
      ],
    },
  ],
};

const FAT_POLYS: TraconAreaPolys = {
  name: 'FAT',
  defaultConfig: 'FATN',
  possibleConfigs: ['FATN', 'FATS'],
  sectorConfigs: [
    {
      sectorName: 'Friant',
      defaultColor: '#E60049',
      configPolyUrls: [
        {
          configs: ['FATN'],
          url: fatnFriant,
        },
        {
          configs: ['FATS'],
          url: fatsFriant,
        },
      ],
    },
    {
      sectorName: 'Chandler',
      defaultColor: '#0BB4FF',
      configPolyUrls: [
        {
          configs: ['FATN'],
          url: fatnChandler,
        },
        {
          configs: ['FATS'],
          url: fatsChandler,
        },
      ],
    },
    {
      sectorName: 'South',
      defaultColor: '#E6D800',
      configPolyUrls: [
        {
          configs: ['FATN', 'FATS'],
          url: fatnSouth,
        },
      ],
    },
  ],
};

const MIL_POLYS: TraconAreaPolys = {
  name: 'RAPCON',
  defaultConfig: 'SFOW',
  possibleConfigs: ['SFOW', 'SFOE'],
  sectorConfigs: [
    {
      sectorName: 'Lemoore',
      defaultColor: '#FD9A5C',
      configPolyUrls: [
        {
          configs: ['SFOW', 'SFOE'],
          url: lemoore,
        },
      ],
    },
    {
      sectorName: 'Fallon',
      defaultColor: '#317F43',
      configPolyUrls: [
        {
          configs: ['SFOW', 'SFOE'],
          url: fallon,
        },
      ],
    },
    {
      sectorName: 'Travis',
      defaultColor: '#0BB4FF',
      configPolyUrls: [
        {
          configs: ['SFOW'],
          url: sfowTravis,
        },
        {
          configs: ['SFOE'],
          url: sfoeTravis,
        },
      ],
    },
  ],
};

export const TRACON_POLY_DEFINITIONS: TraconPolyDefinition[] = [
  { name: 'FAT', polys: FAT_POLYS },
  { name: 'Area E NV', polys: E_NV_POLYS },
  { name: 'Area E CA', polys: E_CA_POLYS },
  { name: 'Area A', polys: A_POLYS },
  { name: 'Area B', polys: B_POLYS },
  { name: 'Area C', polys: C_POLYS },
  { name: 'Area D', polys: D_POLYS },
  { name: 'RAPCON', polys: MIL_POLYS },
];

export const SECTOR_AREA_MAP = new Map<string, string>([
  ...CENTER_POLY_DEFINITIONS.flatMap((area) =>
    area.sectors.map((s) => [s.sectorName, area.name] as const),
  ),
  ...TRACON_POLY_DEFINITIONS.flatMap((def) =>
    def.polys.sectorConfigs.map((s) => [s.sectorName, def.name] as const),
  ),
]);
