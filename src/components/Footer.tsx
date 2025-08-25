"use client"

import { motion } from "framer-motion"
import { useI18n } from "../utils/i18n"

type FooterLink = {
  text: string;
  href: string;
  target?: string;
  rel?: string;
}

type FooterSection = {
  title: string;
  links: FooterLink[];
  logo?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export default function Footer() {
  const { t } = useI18n()
  const footerSections: FooterSection[] = [
    {
      title: t('footer_policies'),
      links: [
        { text: t('footer_attendance'), href: "https://rsmacademy-sa.com/attendance", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_privacy'), href: "https://rsmacademy-sa.com/privacy", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_support_policy'), href: "https://rsmacademy-sa.com/support", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_integrity'), href: "https://rsmacademy-sa.com/integrity", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_ip_rights'), href: "https://rsmacademy-sa.com/copyright", target: "_blank", rel: "noopener noreferrer" }
      ]
    },
    {
      title: t('footer_guidelines'),
      links: [
        { text: t('footer_org_structure'), href: "https://rsmacademy-sa.com/staff", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_student_guide'), href: "https://rsmacademy-sa.com/student_guide", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_guidelines_trainers'), href: "https://rsmacademy-sa.com/guidelines", target: "_blank", rel: "noopener noreferrer" },
        { text: t('footer_beneficiary_survey'), href: "https://rsmacademy-sa.com/feedback", target: "_blank", rel: "noopener noreferrer" }
      ]
    },
    {
      title: t('footer_support'),
      links: [
        { text: t('footer_complaints'), href: "https://rsmacademy-sa.com/contact_us", target: "_blank", rel: "noopener noreferrer" }
      ]
    },
    {
      title: t('footer_accreditation'),
      links: [],
      logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image%20(23).png"
    }
  ]

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-[#1B1B1B] text-white pt-16 pb-16"
    >
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <motion.div 
              key={index} 
              variants={sectionVariants}
              className="space-y-4"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-lg font-medium mb-6"
              >
                {section.title}
              </motion.h3>
              {section.links.length > 0 ? (
                <motion.ul 
                  variants={sectionVariants}
                  className="space-y-3"
                >
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        target={link.target}
                        rel={link.rel}
                      >
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              ) : section.logo && (
                <motion.div 
                  variants={logoVariants}
                  whileHover="hover"
                  className="mt-4"
                >
                  <img 
                    src={section.logo} 
                    alt="National eLearning Center Logo" 
                    className="w-56"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
} 