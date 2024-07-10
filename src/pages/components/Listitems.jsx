import * as React from "react";

import { Link } from "react-router-dom";

import Divider from "@mui/material/Divider";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EventIcon from "@mui/icons-material/Event";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupIcon from "@mui/icons-material/Group";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import MessageIcon from "@mui/icons-material/Message";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <Link
        to={"/"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <Link
        to={"/merchants"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Merchants" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <Link
        to={"/events"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </Link>
    </ListItemButton>

    <Divider sx={{ my: 1 }} />

    <ListSubheader component="div" inset>
      MANAGEMENTS
    </ListSubheader>

    <ListItemButton>
      <Link
        to={"/categories"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <Link
        to={"/scategories"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>

        <ListItemText primary="Special Categories" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <Link
        to={"/coupons"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <LocalActivityIcon />
        </ListItemIcon>
        <ListItemText primary="Tipologie Coupon" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link
        to={"/creditpackages"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="Credit Packages" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      ADMINISTRATION
    </ListSubheader>
    <ListItemButton>
      <Link
        to={"/admins"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Admin Users" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link
        to={"/appusers"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="App Users" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MarkChatUnreadIcon />
      </ListItemIcon>
      <ListItemText primary="Push Notifications" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MessageIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItemButton>

    <ListItemButton>
      <Link
        to={"/"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <AnalyticsIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <Link
        to={"/"}
        style={{ textDecoration: "none", display: "flex", color: "black" }}
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
