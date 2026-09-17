import { notFound } from 'next/navigation';
import NeighborhoodPage from '@/components/hamilton/NeighborhoodPage';
import { areas, areaMetadata } from '@/components/hamilton/content';
export const revalidate=86400;
export const dynamicParams=false;
export function generateStaticParams(){return areas.map(a=>({neighborhood:a.slug}));}
export async function generateMetadata({params}){const {neighborhood}=await params;const area=areas.find(a=>a.slug===neighborhood);return area?areaMetadata(area,'drywall'):{};}
export default async function Page({params}){const {neighborhood}=await params;const area=areas.find(a=>a.slug===neighborhood);if(!area)notFound();return <NeighborhoodPage area={area} type="drywall"/>;}
