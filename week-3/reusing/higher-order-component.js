import React from 'react';

const EnhancedComponent = higherOrderComponent(WrappedComponent);

const withSubscription = (WrappedComponent, selectData) => {
  return (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const handleChange = () => {
        const newData = selectData(DataSource, props);
        setData(newData);
      }
      DataSource.addListener(handleChange);
      return () => {
        DataSource.removeListener(handleChange)
      };
    }, []);
    return <WrappedComponent data={data} {...props} />
  };
};

/* HOC USAGE */

const LiveOrdersListWithSubscription = withSubscription(
  LiveOrders, 
  () => DataSource.getOrders()
);

const UsersSubscribedWithSubscription = withSubscription(
  UsersList,
  () => DataSource.getSubscribers()
);