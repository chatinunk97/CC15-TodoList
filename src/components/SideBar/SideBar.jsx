import styles from "./SideBar.module.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Lists from "./Lists";
import { useState } from "react";
import { nanoid } from "nanoid";

function SideBar() {
  const [allLists, setAllLists] = useState([
    [
      { id: nanoid(), text: "Inbox", icon: <FaInbox />, active: false },
      { id: nanoid(), text: "Today", icon: <FaCalendar />, active: false },
      {
        id: nanoid(),
        text: "Next 7 Days",
        icon: <FaCalendarAlt />,
        active: false,
      },
    ],

    [
      { id: nanoid(), text: "Project-A", icon: <FaInbox />, active: false },
      { id: nanoid(), text: "Project-B", icon: <FaInbox />, active: false },
    ],
  ]);

  const handleClickMenu = (text,updateObj) => {
    const foundArrayIndex = allLists.findIndex((item) => {
      if (
        item.findIndex((item) => {
          return item.id === text;
        }) !== -1
      ) {
        return item;
      }
    });

    const newSubList = allLists[foundArrayIndex].map((obj) => {
      if (obj.id == text) {
        return { ...obj, ...updateObj};
      } else {
        return { ...obj, active: false };
      }
    });
    const updateList = [...allLists];
    updateList[foundArrayIndex]= newSubList;
    setAllLists(updateList)

  };
  return (
    <aside className={styles.sidebar}>
      <section className={styles.sidebar__category}>
        <Lists
          data={allLists[0]}
          handleClickMenu={handleClickMenu}
          // setList={setGeneralList}
        />
      </section>

      <section className={styles.sidebar__category}>
        <div className={styles.accordion}>
          {/* Toggle */}
          <div className={styles.accordion__toggle}>
            <li className={styles.accordion__item}>
              <FaChevronDown
                className={`${styles.accordion__item__icon} ${styles.accordion__item__active}'`}
              />
              <p className={styles.accordion__item__text}>Projects</p>
            </li>
          </div>
          <Lists
            data={allLists[1]}
            // setList={setProjectLists}
            handleClickMenu={handleClickMenu}
          />
        </div>
      </section>
    </aside>
  );
}

export default SideBar;

/* 
Challenge-1 : Refactor ให้ 2 section render UI ที่...
  - OptionA (2/5) : render UI ต่างกัน <Lists/> กับ <Accordion /> 
  - OptionB (4/5) : render UI เดียวกัน เช่น <Lists />
  - OptionC (5/5) : render UI <Lists/> ภายใต้ <Accordion> <Lists/> </Accordion> 
  // ใช้ props.children
*/

/* 
 <ul className='list'>
  // #1
    {projectLists.map((obj) => (
      <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />
    ))} 

    // #2
    {projectLists.map((obj) => {
      obj.key = obj.id;
      delete obj.id;
      return <ListItem {...obj} />;
    })}
</ul>
*/
