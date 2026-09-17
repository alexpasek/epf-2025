import NeighborhoodPage from '@/components/hamilton/NeighborhoodPage';
import { areas, areaMetadata } from '@/components/hamilton/content';
const area=areas.find(a=>a.slug==="beasley");
export const revalidate=86400;
export const metadata=areaMetadata(area,'popcorn');
export default function Page(){return <NeighborhoodPage area={area} type="popcorn"/>;}
