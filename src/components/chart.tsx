import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Navigate, useParams, useSearchParams } from 'react-router-dom';
import { useApi, useAuth } from '@/hooks';
import qs from 'qs';
import { Order } from '@/types';

type DataType = Order;
type BloodPressure = {
  blood_pressure: {
    'kurang normal': number;
    'normal': number;
    'melebihi normal': number;
  };
};

export const BloodSugarSummary = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'pie'> | null>(null);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: '/sensor/avgSensorstatus',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  const pieData = {
    labels: ['Normal', 'Tinggi', 'Rendah'],
    datasets: [
      {
        data: [
          Number(data?.blood_sugar['kurang normal'] ?? 0),
          Number(data?.blood_sugar['normal'] ?? 0),
          Number(data?.blood_sugar['melebihi normal'] ?? 0),
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: pieData,
        });
      }
    }

    const handleResize = () => {
      if (chartRef.current && chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return 'Data tidak ada';
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const BodyTemperatureSummary = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'pie'> | null>(null);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: '/sensor/avgSensorstatus',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );


  const pieData = {
    labels: ['Normal', 'Tinggi', 'Rendah'],
    datasets: [
      {
        data: [
          Number(data?.body_temperature['kurang normal'] ?? 0),
          Number(data?.body_temperature['normal'] ?? 0),
          Number(data?.body_temperature['melebihi normal'] ?? 0),
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: pieData,
        });
      }
    }

    const handleResize = () => {
      if (chartRef.current && chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return <Navigate to="/dashboard/orders" />;
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const HeartRateSummary = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'pie'> | null>(null);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: '/sensor/avgSensorstatus',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  const pieData = {
    labels: ['Normal', 'Tinggi', 'Rendah'],
    datasets: [
      {
        data: [
          Number(data?.heart_rate['kurang normal'] ?? 0),
          Number(data?.heart_rate['normal'] ?? 0),
          Number(data?.heart_rate['melebihi normal'] ?? 0),
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: pieData,
        });
      }
    }

    const handleResize = () => {
      if (chartRef.current && chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return <Navigate to="/dashboard/orders" />;
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const BloodPressureSummary = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'pie'> | null>(null);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<BloodPressure | null>(
    {
      url: '/sensor/avgSensorstatus',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  const pieData = {
    labels: ['Normal', 'Tinggi', 'Rendah'],
    datasets: [
      {
        data: [
          Number(data?.blood_pressure['kurang normal'] ?? 0),
          Number(data?.blood_pressure['normal'] ?? 0),
          Number(data?.blood_pressure['melebihi normal'] ?? 0),
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: pieData,
        });
      }
    }

    const handleResize = () => {
      if (chartRef.current && chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return <Navigate to="/dashboard/orders" />;
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const BodyWeightSummary = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'pie'> | null>(null);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: '/sensor/avgSensorstatus',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  const pieData = {
    labels: ['Kurang normal', 'Normal', 'Melebihi normal'],
    datasets: [
      {
        data: [
          Number(data?.body_weight['kurang normal'] ?? 0),
          Number(data?.body_weight['normal'] ?? 0),
          Number(data?.body_weight['melebihi normal'] ?? 0),
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: pieData,
        });
      }
    }

    const handleResize = () => {
      if (chartRef.current && chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return 'Data tidak ditemukan';
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const BloodOxygenSummary = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'pie'> | null>(null);
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: '/sensor/avgSensorstatus',
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  const pieData = {
    labels: ['Kurang normal', 'Normal', 'Melebihi normal'],
    datasets: [
      {
        data: [
          Number(data?.blood_oxygen['kurang normal'] ?? 0),
          Number(data?.blood_oxygen['normal'] ?? 0),
          Number(data?.blood_oxygen['melebihi normal'] ?? 0),
        ],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: pieData,
        });
      }
    }

    const handleResize = () => {
      if (chartRef.current && chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return 'Data tidak ditemukan';
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const Oksimeter = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: `/sensor/oxygen/${id}`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );
  console.log(data);

  const bloodOxygenData =
    data?.combined_data && data?.combined_data.blood_oxygen;

  const bloodOxygenValues = bloodOxygenData
    ? bloodOxygenData.slice(-5).map((item) => item.value)
    : [];

  const bloodOxygenEndAt = bloodOxygenData
    ? bloodOxygenData.slice(-5).map((item) => item.end_at)
    : [];

  const average = bloodOxygenData
    ? bloodOxygenData.reduce((sum, item) => sum + parseFloat(item.value) || 0, 0) / bloodOxygenData.length
    : 0;

  const averageData = {
    value: average.toString(),
    end_at: 'Average',
  };

  bloodOxygenData?.push(averageData);

  const datas = {
    labels: bloodOxygenEndAt,
    datasets: [
      {
        label: 'Oksimeter',
        data: bloodOxygenValues.map(parseFloat),
        fill: false,
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(255, 0, 0)',
        ],
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: datas,
        });
      }

      const handleResize = () => {
        if (chartRef.current && chartInstance.current) {
          chartInstance.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return 'Data tidak ditemukan';
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const HeartRate = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: `/sensor/oxygen/${id}`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );
  console.log(data);

  const heartRateData =
    data?.combined_data && data?.combined_data.heart_rate;

  const heartRateValues = heartRateData
    ? heartRateData.slice(-5).map((item) => item.value)
    : [];

  const heartRateEndAt = heartRateData
    ? heartRateData.slice(-5).map((item) => item.end_at)
    : [];

  const average = heartRateData
    ? heartRateData.reduce((sum, item) => sum + parseFloat(item.value) || 0, 0) / heartRateData.length
    : 0;

  const averageData = {
    value: average.toString(),
    end_at: 'Average',
  };

  heartRateData?.push(averageData);

  const datas = {
    labels: heartRateEndAt,
    datasets: [
      {
        label: 'Oksimeter',
        data: heartRateValues.map(parseFloat),
        fill: false,
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(255, 0, 0)',
        ],
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: datas,
        });
      }

      const handleResize = () => {
        if (chartRef.current && chartInstance.current) {
          chartInstance.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data) {
    return 'Data tidak ditemukan';
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};


export const BodyWeight = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: `/sensor/weight/${id}`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );
  console.log('Berat badan : ', data);

  const bodyWeightData = data?.combined_data && data?.combined_data.body_weight;

  const bodyWeightValues = bodyWeightData
    ? bodyWeightData.slice(-5).map((item) => item.value)
    : [];

  const bodyweightEndAt = bodyWeightData
    ? bodyWeightData.slice(-5).map((item) => item.end_at)
    : [];

  const average = bodyWeightData
    ? bodyWeightData.reduce((sum, item) => sum + parseFloat(item.value) || 0, 0) / bodyWeightData.length
    : 0;

  const averageData = {
    value: average.toString(),
    end_at: 'Average',
  };

  bodyWeightData?.push(averageData);

  const datas = {
    labels: bodyweightEndAt,
    datasets: [
      {
        label: 'Body Weight',
        data: bodyWeightValues.map(parseFloat),
        fill: false,
        backgroundColor: [
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(75, 192, 192)',
          'rgb(255, 0, 0)',
        ],
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: datas,
        });
      }

      const handleResize = () => {
        if (chartRef.current && chartInstance.current) {
          chartInstance.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data || !bodyWeightData || bodyWeightData.length === 0) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export const BloodPressure = () => {
  const { id } = useParams();
  const { token } = useAuth();
  const [searchParams] = useSearchParams();
  const params = qs.parse(searchParams.toString());
  const [{ data, loading }] = useApi<DataType | null>(
    {
      url: `/sensor/pressure/${id}`,
      method: 'GET',
      headers: {
        Authorization: token,
      },
      params,
    },
    { manual: false }
  );

  const bloodPressureData = data?.blood_pressure;
  const bloodPressureValues = bloodPressureData
    ? bloodPressureData.slice(-5).map((item) => {

      const splitValues = item.value.split('/');


      const value1 = parseFloat(splitValues[0]);
      const value2 = parseFloat(splitValues[1]);

      return [value1, value2];
    })
    : [];

  const bloodPressureEndAt = bloodPressureData
    ? bloodPressureData.slice(-5).map((item) => item.end_at)
    : [];

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  const datas = {
    labels: bloodPressureEndAt,
    datasets: [
      {
        label: 'Systolic',
        data: bloodPressureValues.map((item) => item[0]),
        backgroundColor: ['rgb(255, 99, 132)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        tension: 0.1,
      },
      {
        label: 'Diastolic',
        data: bloodPressureValues.map((item) => item[1]),
        backgroundColor: ['rgb(54, 162, 235)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        tension: 0.1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: datas,
        });
      }

      const handleResize = () => {
        if (chartRef.current && chartInstance.current) {
          chartInstance.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);

        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!data || !bloodPressureData || bloodPressureData.length === 0) {
    return <div>Data tidak ditemukan.</div>;
  }

  return (
    <div className="">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

