import {
  Button,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import BudgetForm from "./BudgetForm";

const useStyles = makeStyles({
  tab: {
    color: "black !important",
  },
  budget: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  button: {
    color: "green !important",
    border: "3px solid green !important",
  },
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BudgetModal = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.budget}>
      <Button
        onClick={handleOpenModal}
        className={classes.button}
        variant="outlined"
      >
        Create Budget
      </Button>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ borderBottom: 1}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Income" {...a11yProps(0)} />
              <Tab label="Expense" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <BudgetForm budgetType="Income"/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BudgetForm budgetType="Expense"/>
          </TabPanel>
        </Box>
      </Modal>
    </div>
  );
};

export default BudgetModal;
