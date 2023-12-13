import { Card, Col, Row, Statistic, Typography } from 'antd';
import { useAuth, useApi } from '@/hooks';
import CountUp from 'react-countup';
import { PageLoading } from '@/components';
import { Navigate, useSearchParams } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import {
  MdBloodtype,
  MdOutlineMonitorWeight,
  MdThermostat,
} from 'react-icons/md';
import qs from 'qs';
import {
  BloodOxygenSummary,
  BloodPressureSummary,
  BloodSugarSummary,
  BodyTemperatureSummary,
  BodyWeightSummary,
  HeartRateSummary,
} from '@/components/chart';

export type DataType = {
  body_temperature: number;
  blood_oxygen: number;
  heart_rate: number;
  body_weight: number;
  blood_sugar: number;
  diastolic_pressure: number;
  systolic_pressure: number;
};
const formatter = (value: number | string) => (
  <CountUp
    end={typeof value === 'string' ? parseFloat(value) : value}
    separator=","
  />
);

export function Component() {
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType>(
    {
      url: '/sensor/avgSensor',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  if (loading) {
    return <PageLoading />;
  } else if (!data) {
    return <Navigate to="/dashboard/summary" />;
  }

  const statisticsData = [
    {
      title: 'Termometer',
      prefix: <MdThermostat />,
      color: '#60A5FA',
      text: 'white',
      icon: 'white',
      dataValue: data.body_temperature,
    },
    {
      title: 'Oksimeter',
      prefix: <AiFillCheckCircle />,
      color: 'white',
      icon: '#60A5FA',
      text: '#495252',
      dataValue: data.blood_oxygen,
    },
    {
      title: 'Berat Badan',
      prefix: <MdOutlineMonitorWeight />,
      color: 'white',
      icon: '#60A5FA',
      text: '#495252',
      dataValue: data.body_weight,
    },
    {
      title: 'Gula Darah',
      prefix: <MdBloodtype />,
      color: 'white',
      icon: '#60A5FA',
      text: '#495252',
      dataValue: data.blood_sugar,
    },
    {
      title: 'Detak Jantung',
      prefix: <MdBloodtype />,
      color: 'white',
      icon: '#60A5FA',
      text: '#495252',
      dataValue: data.heart_rate,
    },
    {
      title: 'Tekanan Systoloic',
      prefix: <MdBloodtype />,
      color: 'white',
      icon: '#60A5FA',
      text: '#495252',
      dataValue: data.diastolic_pressure,
    },
    {
      title: 'Tekanan Diastolic',
      prefix: <MdBloodtype />,
      color: 'white',
      icon: '#60A5FA',
      text: '#495252',
      dataValue: data.systolic_pressure,
    },
  ];

  return (
    <>
      <h1 className="text-2xl text-gray-700 font-bold text-center m-5">
        Puskesmas Ngaglik 1
      </h1>
      <Row gutter={10}>
        {statisticsData.map((statistic, index) => (
          <Col
            span={4}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={25}
            style={{ marginBottom: '20px' }}
            key={index}
          >
            <Card style={{ backgroundColor: statistic.color, height: '210px' }}>
              <Statistic
                style={{ marginTop: '10px', marginBottom: '10px' }}
                title={
                  <Typography.Title level={5} style={{ color: statistic.text }}>
                    {statistic.title}
                  </Typography.Title>
                }
                value={statistic.dataValue}
                prefix={
                  <div
                    className="p-2 rounded-md mr-2 text-2xl"
                    style={{
                      color: statistic.color,
                      backgroundColor: statistic.icon,
                    }}
                  >
                    {statistic.prefix}
                  </div>
                }
                valueStyle={{
                  color: statistic.text,
                  fontWeight: 'bold',
                  fontSize: '40px',
                  marginBottom: '10px',
                }}
                formatter={formatter}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <div className="bg-white rounded-md">
        <h1 className="text-center text-2xl font-semibold p-10">
          Perbandingan Hasil Uji User
        </h1>
        <div className="grid md:grid-cols-3 gap-5 m-5">
          <Card title="Gula darah">
            <BloodSugarSummary />
          </Card>
          <Card title="Termometer">
            <BodyTemperatureSummary />
          </Card>
          <Card title="Berat Badan">
            <BodyWeightSummary />
          </Card>
          <Card title="Tekanan Darah">
            <BloodPressureSummary />
          </Card>
          <Card title="Detak Jantung">
            <HeartRateSummary />
          </Card>
          <Card title="Oksimeter">
            <BloodOxygenSummary />
          </Card>
        </div>
      </div>
    </>
  );
}
