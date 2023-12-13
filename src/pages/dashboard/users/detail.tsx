import {
  BloodPressure,
  BodyWeight,
  HeartRate,
  Oksimeter,

} from '@/components/chart';
import { Card } from 'antd';

export function Component() {
  return (
    <>
      <div className="bg-white w-full
       md:w-full rounded-md pt-10">
        <h1 className="text-center text-2xl font-semibold p-5">
          Grafik hasil uji user
        </h1>
        <div className="gap-3 grid justify-items-center mx-auto">
          <Card title="Tekanan Darah" className='w-80 md:w-[700px] lg:w-[800px] xl:w-[1000px]'>
            <div className="">
              <BloodPressure />
            </div>
          </Card>
          <Card title="Detak Jantung" className='w-80 md:w-[700px] lg:w-[800px] xl:w-[1000px]'>
            <HeartRate />

          </Card>
          <Card title="Oksimeter" className='w-80 md:w-[700px] lg:w-[800px] xl:w-[1000px]'>
            <Oksimeter />
          </Card>
          <Card title="Berat Badan" className='w-80 md:w-[700px] lg:w-[800px] xl:w-[1000px]'>
            <BodyWeight />
          </Card>
        </div>
      </div>
    </>
  );
}
