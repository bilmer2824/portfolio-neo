"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useEffect } from 'react'

import styled from '../scss/portfolio.module.scss'
import logo from '../../Components/Images/neo.png'

import { ImCheckmark } from 'react-icons/im'
import { FaRegSnowflake, FaCalendarAlt } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'
import { useTheme } from '../context/Context'
import { format } from 'date-fns';


export default function Page() {
  const { dayMoon } = useTheme();
  const [all_category, setAll] = useState('all_category')
  const [website, setWebsite] = useState('website')
  const [webDesign, setWebDesign] = useState('web_design')
  const [appDesign, setAppDesign] = useState('app_design')
  const [api, setApi] = useState('api')
  const [telegramBot, setTelegramBot] = useState('telegram_bot')

  const [all_filter, setAllFilter] = useState('all_filter')
  const [data_filter, setDataFilter] = useState('data')
  const [title_filter, setTitleFilter] = useState('title_name')

  const [porfolio, setPortfolio] = useState([])
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    fetch('https://portfoliobilmer.pythonanywhere.com/api/v5/portfolio-data/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((porfolio) => {
        setPortfolio(porfolio);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [])
  const portfolio_object = porfolio.map((item) => {
    const inputDate = item.portfolio_data;
    const parsedDate = new Date(inputDate);
    const formattedDate = format(parsedDate, "dd MMMM yyyy");

    const truncateString = (string = '', maxLength = 50) =>
      string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string
    const portfolio_text = truncateString(item.portfolio_text, 76)


    return (
      <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`} key={item.id}>
        <Image
          alt=''
          src={item.portfolio_img}
          className={styled.next_handler_content_list_item_image}
          fill
          sizes="(max-width: 320px) 100vw, 50vw"
        />
        <ul className={styled.next_handler_content_list}>
          <li className={styled.next_handler_content_list_item_title_blog}>
            <span className={`${styled.next_handler_content_list_item_title_blog_circle} ${dayMoon ? styled.next_handler_content_list_item_title_blog_circle_active : ""}`}></span>
            <h6 className={`${styled.next_handler_content_list_item_title} ${dayMoon ? styled.text_color : ""}`}>{item.uploader_name}</h6>
          </li>
          <li className={styled.next_handler_content_list_item_title_blog}>
            <FaCalendarAlt className={`${styled.next_handler_content_list_item_title_blog_icon} ${dayMoon ? styled.text_color : ""}`} />
            <p className={`${styled.next_handler_content_list_item_title_blog_data} ${dayMoon ? styled.text_color : ""}`}>{formattedDate}</p>
          </li>
        </ul>
        <h4 className={`${styled.next_handler_content_list_title}  ${dayMoon ? styled.text_color : ""}`}>{item.portfolio_title}</h4>
        <p className={`${styled.next_handler_content_list_text}  ${dayMoon ? styled.text_color : ""}`}>{portfolio_text}</p>
        <div className={styled.next_handler_content_list_btn_blog}>
          <a href={item.portfolio_link} target='_blank' className={`${styled.next_handler_content_list_btn}  ${dayMoon ? styled.main_content_btn_active : ""}`}>Learn More</a>
          <FaRegSnowflake className={`${styled.next_handler_content_list_btn_icon}  ${dayMoon ? styled.text_color : ""}`} />
        </div>
      </div>
    )
  })
  portfolio_object



  return (
    <>
      <section className={styled.main}>
        <div className="container-main">
          <div className={styled.main_content}>
            <div className={styled.main_content_left}>
              <h2 className={`${styled.main_content_left_text_page_title} ${dayMoon ? styled.text_color : ""}`}>My All Portfolio Work</h2>
              <p className={`${styled.main_content_left_text_page_text_one} ${dayMoon ? styled.text_color : ""}`}>Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
              <div className={styled.main_content_left_btn_group}>
                <button className={`${styled.main_content_left_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Download</button>
                <button className={`${styled.main_content_left_btn} ${dayMoon ? styled.main_content_btn_active : ""}`}>Contact</button>
              </div>
            </div>
            {/* <Image src={logo} alt='logo' className={styled.main_content_right_logo} /> */}
            <div className={styled.main_content_right}>
              <div className={`${styled.main_content_right_logo_blog} ${dayMoon ? styled.background_color_plus : ""}`}>
                <Image src={logo} alt="logo" fill className={`${styled.main_content_right_logo_blog_image} ${dayMoon ? styled.main_content_right_logo_blog_image_active : ""}`} />
              </div>
              <div className={`${styled.main_content_right_z_index} ${dayMoon ? styled.shadow_inset_active : ""}`}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styled.rectangle}>
        <div className="container-main">
          <div className={`${styled.rectangle_content} ${dayMoon ? styled.background_color : ""}`}>
            <div className={`${styled.rectangle_content_blog} ${dayMoon ? styled.shadow_inset_active : ""}`} >

            </div>
            <div className={`${styled.rectangle_content_blog} ${dayMoon ? styled.shadow_inset_active : ""}`} >

            </div>
            <div className={`${styled.rectangle_content_blog} ${dayMoon ? styled.shadow_inset_active : ""}`} >

            </div>
          </div>
        </div>
      </section>
      <section className={styled.all_portfolio}>
        <div className="container-main">
          <div className={styled.all_portfolio_content}>
            <div className={styled.all_portfolio_content_filter_category}>
              <h6 className={`${styled.all_portfolio_content_filter_category_title} ${dayMoon ? styled.text_color : ""}`} >Categories</h6>
              <ul className={styled.all_portfolio_content_filter_category_list}>
                <li className={`${styled.all_portfolio_content_filter_category_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={all_category} >All</li>
                <li className={`${styled.all_portfolio_content_filter_category_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={website} >Website</li>
                <li className={`${styled.all_portfolio_content_filter_category_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={webDesign} >Web design</li>
                <li className={`${styled.all_portfolio_content_filter_category_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={appDesign} >App design</li>
                <li className={`${styled.all_portfolio_content_filter_category_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={api} >API</li>
                <li className={`${styled.all_portfolio_content_filter_category_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={telegramBot} >Telegram bot</li>
              </ul>
            </div>
            <div className={styled.all_portfolio_content_filter_data}>
              <h6 className={`${styled.all_portfolio_content_filter_data_title} ${dayMoon ? styled.text_color : ""}`}>Filter</h6>
              <ul className={styled.all_portfolio_content_filter_data_list}>
                <li className={`${styled.all_portfolio_content_filter_data_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={all_filter}>All</li>
                <li className={`${styled.all_portfolio_content_filter_data_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={data_filter}>Data</li>
                <li className={`${styled.all_portfolio_content_filter_data_item} ${dayMoon ? styled.main_content_btn_active : ""}`} data-category={title_filter}>Title name</li>
              </ul>
            </div>
            <article className={styled.all_portfolio_content_article}>

            </article>
          </div>
        </div>
      </section>
      <section className={styled.next_handler}>
        <div className="container-main">
          <div className={styled.next_handler_content}>
            {portfolio_object}

            {/* <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`}>
              <div className={`${styled.next_handler_content_list_item_more_blog}  ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                <div className={`${styled.next_handler_content_list_item_more} ${dayMoon ? styled.main_content_btn_active : ""}`}>More</div>
              </div>
            </div> */}

          </div>
        </div>
      </section>
      <section className={styled.next_form_section}>
        <div className="container-main">
          <form action="" className={`${styled.next_form} ${dayMoon ? styled.background_color : ""}`}>

            <label htmlFor="" className={styled.next_form_label}>
              <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`} >Your Name</span>
              <div className={styled.next_form_label_group}>
                <span className={`${styled.next_form_label_span_bg} ${dayMoon ? styled.text_color_plus : ""}`}>
                  <BiUserCircle />
                </span>
                <input type="text" className={`${styled.next_form_label_input} ${dayMoon ? styled.shadow_inset_active_plus : ""}`} required />
              </div>
            </label>

            <label htmlFor="" className={styled.next_form_label}>
              <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`}>Your Email</span>
              <div className={styled.next_form_label_group}>
                <span className={`${styled.next_form_label_span_bg} ${dayMoon ? styled.text_color_plus : ""}`}>
                  <MdOutlineEmail />
                </span>
                <input type="email" className={`${styled.next_form_label_input} ${dayMoon ? styled.shadow_inset_active_plus : ""}`} required />
              </div>
            </label>

            <label htmlFor="" className={styled.next_form_label}>
              <span className={`${styled.next_form_label_span} ${dayMoon ? styled.text_color : ""}`}>Your Message</span>
              <textarea type="text" className={`${styled.next_form_label_textarea} ${dayMoon ? styled.shadow_inset_active_plus : ""}`} required />
            </label>
            <div className={styled.next_form_section_btn_group}>
              <button type='reset' className={`${styled.next_form_section_btn} ${dayMoon ? styled.main_content_btn_active : ""}`} >Clear Message</button>
              <button type='submit' className={`${styled.next_form_section_btn} ${dayMoon ? styled.main_content_btn_active : ""}`} >Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
