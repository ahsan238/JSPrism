switch (true) {
    case os_is_mac:
      console.log("Condition 1 is true");
      break;
    case os_is_win:
      console.log("Condition 2 is true");
      break;
    case os_is_linux:
      console.log("Condition 3 is true");
      break;
    default:
      console.log("None of the conditions are true");
      break;
  }