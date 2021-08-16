import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      paddingTop: '65px',
      '@media print': {
        paddingTop: 0,
      },
    },
  }),
);

export default useStyles;
