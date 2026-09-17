import Link from 'next/link';
import { areas, services } from './content';
import styles from './area.module.css';
export default function AreaCards({type}) {
 return <div className={styles.grid}>{areas.map(area=><Link key={area.slug} className={styles.card} href={`${services[type].hub}${area.slug}/`}><strong>{area.name}</strong><span>{type==='popcorn'?area.popcornFocus:area.focus}</span><small>{services[type].name} in {area.name} →</small></Link>)}</div>;
}
