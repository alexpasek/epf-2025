import CompareSlider from '@/components/CompareSlider';
export const metadata={title:'Before & After — Wallpaper Removal Pro'};
export default function Page(){
  const pairs=[
    {before:'/home/1.webp',after:'/home/2.webp',caption:'Popcorn ceiling removal — living room'},
    {before:'/home/3.webp',after:'/home/4.webp',caption:'Wallpaper removal + skim + paint'}
  ];
  return(<div className='container-x py-10'>
    <h1 className='text-3xl font-bold'>Before & After</h1>
    <p className='mt-2 text-gray-700'>Slide to compare. Knob starts centered; drag anywhere on the image.</p>
    <div className='mt-8 grid gap-8'>{pairs.map((p,i)=><CompareSlider key={i} {...p}/>)}</div>
  </div>);
}
