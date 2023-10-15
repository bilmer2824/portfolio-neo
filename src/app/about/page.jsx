"use client"

import React, {useState, useEffect} from 'react'
import styled from '../scss/about.module.scss'
import Image from 'next/image'
import { FaRegSnowflake, FaCalendarAlt } from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'
import { BsPhoneFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

import { useTheme } from '@/app/context/Context_alisa';
import { format } from 'date-fns';
import logo from '../../Components/Images/about_logo.jpg'
import about_image from '../../Components/Images/about_image.png'

import Signature from '../../Components/Images/signature.svg'
import Link from 'next/link'

export default function Page() {
  const { dayMoon } = useTheme();
  console.log(dayMoon);
  
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
            ?  `${string.substring(0, maxLength)}…`
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
    const portfolio_data = portfolio_object.slice(-2)

    
    // https://github.com/BilmerIslamov/number-project/assets/142201562/c3cd3267-6774-44dd-969a-aed0e856b560
  return (
    <>
      <section className={styled.main}>
        <div className="container-main">
          <div className={styled.main_content}>
            <div className={`${styled.main_content_left_logo_page} ${dayMoon ? styled.box_2x_shadow : ""}`}>
              <Image src={logo} sizes={false} alt="logo" className={styled.main_content_left_logo_page_image} fill />
            </div>
            <div className={styled.main_content_right_text_page}>
              <h2 className={`${styled.main_content_right_text_page_title} ${dayMoon ? styled.text_color : ""}`}>About Me</h2>
              <p className={`${styled.main_content_right_text_page_text_one} ${dayMoon ? styled.text_color : ""}`}>Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
              <br />
              <p className={`${styled.main_content_right_text_page_text_two} ${dayMoon ? styled.text_color : ""}`}>Our small team is active in the creative community, endlessly interested in what’s next, and generally pleasant to be around.</p>
              <Image src={about_image} alt="" className={`${styled.main_content_right_text_page_image} ${dayMoon ? styled.image_filter : ""}`} fill sizes={false} />
            </div>
          </div>
        </div>
      </section>
      <section className={styled.biography}>
        <div className="container-main">
          <div className={`${styled.biography_content} ${dayMoon ? styled.background_color : ""}`}>
            <h4 className={`${styled.biography_content_title} ${dayMoon ? styled.text_color : ""}`}>Biography</h4>
            <ul className={styled.biography_content_list}>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Birthday:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>17,March 2004</p>
              </li>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>City:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>Tashkent</p>
              </li>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Country:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>Uzbekistan</p>
              </li>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Phone:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>+998 (95) 244 28 24</p>
              </li>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Age:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>19 Years</p>
              </li>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Degree:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>Training Center</p>
              </li>
              <li className={styled.biography_content_item}>
                <p className={`${styled.biography_content_item_text_one} ${dayMoon ? styled.text_color : ""}`}>Email:</p>
                <p className={`${styled.biography_content_item_text_two} ${dayMoon ? styled.text_color : ""}`}>bilmerlibrary@gmail.com</p>
              </li>
            </ul>
            <div className={styled.biography_content_logo_blog}>
              <div className={`${styled.biography_content_logo_blog_modul} ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>

              </div>
              <div className={`${styled.biography_content_logo_blog_modul} ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>

              </div>
              <div className={`${styled.biography_content_logo_blog_modul} ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styled.next_handler}>
        <div className="container-main">
          <div className={styled.next_handler_content}>{portfolio_data}
            <div className={`${styled.next_handler_content_list_item} ${dayMoon ? styled.background_color : ""}`}>
              <div className={`${styled.next_handler_content_list_item_more_blog}  ${dayMoon ? styled.main_content_box_shadow_inset_active : ""}`}>
                <Link href="portfolio" className={`${styled.next_handler_content_list_item_more} ${dayMoon ? styled.main_content_btn_active : ""}`}>More</Link>
              </div>
            </div>

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
