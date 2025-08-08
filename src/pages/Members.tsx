import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Members = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  
  const members = [
    //2025 Members
    {
      name: 'Aufa Abdillah',
      role: 'Project Manager',
      department: 'Mechanical Engineering',
      year: '5th Year',
      joinYear: 2025,
      division: 'Official',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQECgh5OkLhvNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706764420491?e=1756339200&v=beta&t=U--G_2tB7vr7JYaRCluCICCdEUDu2fbkGxfZi18faHc',
      bio: 'Leading project coordination and strategic planning for all robotics competitions. Specializes in system integration and team management.',
      skills: ['Project Management', 'System Integration', 'Leadership', 'Strategic Planning'],
      contact: {
        phone: '085942167648',
        email: 'aufa.abdillah@students.undip.ac.id',
        linkedin: 'https://www.linkedin.com/in/aufa-rofiqi-abdillah-594b381b9/',
        github: null
      }
    },
    {
      name: 'Mega Adinda',
      role: 'Managerial',
      department: 'Electrical Engineering',
      year: '3rd Year',
      joinYear: 2025,
      division: 'Official',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQHN1I1cQiQGTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699149581493?e=1756339200&v=beta&t=tF_jtuWoxcbxxTqE-KYnCQXsd3dEClZfi-CGUfDxa3U',
      bio: 'Responsible for team operations, resource management, and administrative coordination. Ensures smooth workflow and effective communication.',
      skills: ['Operations Management', 'Resource Planning', 'Communication', 'Process Optimization'],
      contact: {
        phone: '0895811430123',
        email: 'mega.adinda@students.undip.ac.id',
        linkedin: 'https://www.linkedin.com/in/mega-adinda-0aab2b299/',
        github: null
      }
    },
    {
      name: 'Helmi Yusuf',
      role: 'Team Leader',
      department: 'Electrical Engineering',
      year: '3rd Year',
      joinYear: 2025,
      division: 'Electrical',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEvlHmgFBCq6w/profile-displayphoto-shrink_800_800/B56ZX2ranXHQAg-/0/1743600331886?e=1756339200&v=beta&t=9aSQN7bqmONVPuMCgnaP97utEFx_Op4fDHmQzSR3Ies',
      bio: 'Technical leader focusing on guiding the team, motivating members, and ensuring project alignment with technical goals. Expert in electrical systems and robotics.',
      skills: ['Electrical Design', 'Circuit Analysis', 'Robotics', 'Technical Leadership'],
      contact: {
        phone: '082324104226',
        email: 'helmi.yusuf@students.undip.ac.id',
        linkedin: null,
        github: 'https://github.com/helmiyusuf'
      }
    },
    {
      name: 'I Made Khrisna Swastika',
      role: 'Computer Vision Engineering',
      department: 'Electrical Engineering',
      year: '2nd Year',
      joinYear: 2025,
      division: 'Programming',
      image: null, // No photo available
      bio: 'Specializes in dataset segmentation, computer vision programming, and movement prediction in programming division.',
      skills: ['Computer Vision', 'Machine Learning', 'Image Processing', 'Python'],
      contact: {
        phone: '081936666677',
        email: 'khrisnaswastika000@gmail.com',
        linkedin: 'https://www.linkedin.com/in/i-made-khrisna-swastika-35ab03360/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: null
      }
    },
    {
      name: 'Dennis Raditya',
      role: 'CAD Engineer',
      department: 'Automation Engineering',
      year: '2nd Year',
      joinYear: 2025,
      division: 'Mechanical',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQH-5MfAjbOBoQ/profile-displayphoto-shrink_800_800/B4EZNcxfKEHwAg-/0/1732428297980?e=1756339200&v=beta&t=NUrXquABh0GM0StYb0CrhqtlvbvmFkNx_m1wnO6_GaQ',
      bio: 'Specializes in CAD design, 3D modeling, manufacturing processes, and engineering design.',
      skills: ['CAD/CAM', '3D Modeling', 'Manufacturing', 'Engineering Design'],
      contact: {
        phone: '085858504944',
        email: 'dnnsrdty@gmail.com',
        linkedin: 'https://www.linkedin.com/in/dennis-raditya-4bb0472b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: null
      }
    },
    {
      name: 'Yudha Ali Yahya',
      role: 'Manufacturing Engineer',
      department: 'Mechanical Engineering',
      year: '1st Year',
      joinYear: 2025,
      division: 'Mechanical',
      image: null, // No photo available
      bio: 'Specializes in manufacturing and production optimization, with experience in process planning, quality control, and tools like SolidWorks, CNC machining, and Autodesk Inventor.',
      skills: ['CAD/CAM', 'CNC Machining', '3D Modeling', 'Manufacturing', 'Quality Control'],
      contact: {
        phone: '083862269503',
        email: 'yudhaaliyahya@gmail.com',
        linkedin: null,
        github: null
      }
    },
    {
      name: 'Novanda Putra Widya Ardhi',
      role: 'Embedded Software Engineer',
      department: 'Electrical Engineering',
      year: '2nd Year',
      joinYear: 2025,
      division: 'Programming',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEEEJBLNI5Usw/profile-displayphoto-shrink_800_800/B56ZdVNU_PG0Ao-/0/1749481248279?e=1756339200&v=beta&t=tI-3VerP5u565s3VfBKt_WY8dn1BaxKv883wPjBr3uA',
      bio: 'Focused on embedded system development and electronic hardware integration, with proven experience leading interdisciplinary field and delivering robust, production-ready solutions',
      skills: ['STM32', 'Embedded C', 'Computer Vision', 'RTOS', 'PCB Design', 'Soldering'],
      contact: {
        phone: '081227962465',
        email: 'ardhinovanda@gmail.com',
        linkedin: 'https://www.linkedin.com/in/novanda-putra-widya-ardhi',
        github: null
      }
    },
    {
      name: 'Athaya Rashif Hanang Syah',
      role: 'Hardware Engineer',
      department: 'Electrical Engineering',
      year: '1st Year',
      joinYear: 2025,
      division: 'Electrical',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEt4XQHDynM9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713284776153?e=1756339200&v=beta&t=1XoAVGH3ybwKmEX9zWk_pvgJksXdcL_2jtuUzGJKoYM',
      bio: 'Hardware Engineer specializing in PCB design, embedded systems, and rapid prototyping. Skilled in turning circuit concepts into working hardware using tools like Altium, EasyEDA, STM32, and ESP32. Passionate about building efficient, reliable electronics from the ground up.',
      skills: ['PCB Design', 'Soldering', 'Schematic Capture', 'STM32', 'DSP'],
      contact: {
        phone: '-',
        email: 'athayarashif@gmail.com',
        linkedin: 'https://www.linkedin.com/in/athayarh/',
        github: null
      }
    },
    // 2024 Members
    {
      name: 'Aufa Abdillah',
      role: 'Team Leader',
      department: 'Mechanical Engineering',
      year: '4th Year',
      joinYear: 2024,
      division: 'Official',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQECgh5OkLhvNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706764420491?e=1756339200&v=beta&t=U--G_2tB7vr7JYaRCluCICCdEUDu2fbkGxfZi18faHc',
      bio: 'Technical leader focusing on guiding the team, motivating members, and ensuring project alignment with technical goals.',
      skills: ['Project Management', 'System Integration', 'Leadership', 'Strategic Planning'],
      contact: {
        phone: '085942167648',
        email: 'aufa.abdillah@students.undip.ac.id',
        linkedin: 'https://www.linkedin.com/in/aufa-rofiqi-abdillah-594b381b9/',
        github: null
      }
    },
    {
      name: 'Mohammad Sirojudin Munir',
      role: 'Project Manager',
      department: 'Electrical Engineering',
      year: '7th Year',
      joinYear: 2024,
      division: 'Programming',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFqfLbvPe7oTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723256679448?e=1756339200&v=beta&t=pTDT1k__IzmCwlnhy4cRfEoCVk9x4g_uxDUh-NbMN-k',
      bio: 'Led the development of autonomous navigation systems and swerve drive modules. Master in STM32.',
      skills: ['STM32', 'C/C++', 'Python', 'CAN Bus', 'RTOS'],
      contact: {
        phone: '+62 812-2554-1059',
        email: 'mohammad.sirojudin@students.undip.ac.id',
        linkedin: 'https://www.linkedin.com/in/moh-sirojudin-munir-3b01561b1/',
        github: 'https://github.com/sirojudinMunir'
      }
    },
    {
      name: 'I Made Khrisna Swastika',
      role: 'Computer Vision Engineering',
      department: 'Electrical Engineering',
      year: '1st Year',
      joinYear: 2024,
      division: 'Programming',
      image: null,
      bio: 'Specializes in dataset segmentation, computer vision programming, and movement prediction in programming division.',
      skills: ['Computer Vision', 'Machine Learning', 'Image Processing', 'Python'],
      contact: {
        phone: '081936666677',
        email: 'khrisnaswastika000@gmail.com',
        linkedin: 'https://www.linkedin.com/in/i-made-khrisna-swastika-35ab03360/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: null
      }
    },
    {
      name: 'Dennis Raditya',
      role: 'CAD Engineer',
      department: 'Automation Engineering',
      year: '1st Year',
      joinYear: 2024,
      division: 'Mechanical',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQH-5MfAjbOBoQ/profile-displayphoto-shrink_800_800/B4EZNcxfKEHwAg-/0/1732428297980?e=1756339200&v=beta&t=NUrXquABh0GM0StYb0CrhqtlvbvmFkNx_m1wnO6_GaQ',
      bio: 'Specializes in CAD design, 3D modeling, manufacturing processes, and engineering design.',
      skills: ['CAD/CAM', '3D Modeling', 'Manufacturing', 'Engineering Design'],
      contact: {
        phone: '085858504944',
        email: 'dnnsrdty@gmail.com',
        linkedin: 'https://www.linkedin.com/in/dennis-raditya-4bb0472b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: null
      }
    },
        {
      name: 'Novanda Putra Widya Ardhi',
      role: 'Embedded Software Engineer',
      department: 'Electrical Engineering',
      year: '1st Year',
      joinYear: 2024,
      division: 'Programming',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQEEEJBLNI5Usw/profile-displayphoto-shrink_800_800/B56ZdVNU_PG0Ao-/0/1749481248279?e=1756339200&v=beta&t=tI-3VerP5u565s3VfBKt_WY8dn1BaxKv883wPjBr3uA',
      bio: 'Focused on embedded system development and electronic hardware integration, with proven experience leading interdisciplinary field and delivering robust, production-ready solutions',
      skills: ['STM32', 'Embedded C', 'Computer Vision', 'RTOS', 'PCB Design', 'Soldering'],
      contact: {
        phone: '081227962465',
        email: 'ardhinovanda@gmail.com',
        linkedin: 'https://www.linkedin.com/in/novanda-putra-widya-ardhi',
        github: null
      }
    },
    // 2023 Members
    {
      name: 'Mohammad Sirojudin Munir',
      role: 'Hard Carry Engineer',
      department: 'Electrical Engineering',
      year: '6th Year',
      joinYear: 2023,
      division: 'Programming',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFqfLbvPe7oTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723256679448?e=1756339200&v=beta&t=pTDT1k__IzmCwlnhy4cRfEoCVk9x4g_uxDUh-NbMN-k',
      bio: 'Led the development of autonomous navigation systems and swerve drive modules. Master in STM32.',
      skills: ['STM32', 'C/C++', 'Python', 'CAN Bus', 'RTOS'],
      contact: {
        phone: '+62 812-2554-1059',
        email: 'mohammad.sirojudin@students.undip.ac.id',
        linkedin: 'https://www.linkedin.com/in/moh-sirojudin-munir-3b01561b1/',
        github: 'https://github.com/sirojudinMunir'
      }
    },
    {
      name: 'Aufa Abdillah',
      role: 'Mechanical Engineer',
      department: 'Mechanical Engineering',
      year: '2nd Year',
      joinYear: 2023,
      division: 'Mechanical',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQECgh5OkLhvNA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706764420491?e=1756339200&v=beta&t=U--G_2tB7vr7JYaRCluCICCdEUDu2fbkGxfZi18faHc',
      bio: 'Technical leader focusing on guiding the team, motivating members, and ensuring project alignment with technical goals.',
      skills: ['Project Management', 'System Integration', 'Leadership', 'Strategic Planning'],
      contact: {
        phone: '085942167648',
        email: 'aufa.abdillah@students.undip.ac.id',
        linkedin: 'https://www.linkedin.com/in/aufa-rofiqi-abdillah-594b381b9/',
        github: null
      }
    },
    {
      name: 'Maria Santos',
      role: 'Research Lead',
      department: 'Computer Science',
      year: '5th Year',
      joinYear: 2023,
      division: 'Programming',
      image: null,
      bio: 'Leading research initiatives in autonomous navigation and sensor fusion.',
      skills: ['Research', 'SLAM', 'Sensor Fusion', 'ROS'],
      contact: {
        phone: '085678901234',
        email: 'maria.santos@students.undip.ac.id',
        linkedin: 'https://linkedin.com/in/mariasantos',
        github: 'https://github.com/msantos'
      }
    }
  ];

  // Get unique years and sort them
  const years = [...new Set(members.map(m => m.joinYear))].sort((a, b) => b - a);
  
  // Filter members by year
  const filteredMembers = members.filter(member => member.joinYear === selectedYear);

  // Function to render members with custom layout
  const renderMembersGrid = (members) => {
    if (members.length === 0) return null;

    // Layout berdasarkan tahun
    if (selectedYear >= 2025) {
      // Tahun 2025 ke atas: 3 orang pertama, sisanya 4 kolom
      const firstThreeMembers = members.slice(0, 3);
      const remainingMembers = members.slice(3);

      return (
        <div className="space-y-8">
          {/* First 3 members in 3 columns */}
          {firstThreeMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {firstThreeMembers.map((member, index) => (
                <MemberCard key={`first-${index}`} member={member} />
              ))}
            </div>
          )}

          {/* Remaining members in 4 columns */}
          {remainingMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {remainingMembers.map((member, index) => (
                <MemberCard key={`remaining-${index}`} member={member} />
              ))}
            </div>
          )}
        </div>
      );
    } else {
      // Tahun 2024 ke bawah: 1 orang pertama di tengah dengan ukuran card yang sama, sisanya 4 kolom
      const firstMember = members.slice(0, 1);
      const remainingMembers = members.slice(1);

      return (
        <div className="space-y-8">
          {/* First member centered with same card size */}
          {firstMember.length > 0 && (
            <div className="flex justify-center max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-6" style={{ maxWidth: '280px' }}>
                <MemberCard member={firstMember[0]} />
              </div>
            </div>
          )}

          {/* Remaining members in 4 columns */}
          {remainingMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {remainingMembers.map((member, index) => (
                <MemberCard key={`remaining-${index}`} member={member} />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  // Calculate division counts for selected year
  const calculateDivisionCounts = () => {
    const yearMembers = members.filter(m => m.joinYear === selectedYear);
    const counts = {
      Mechanical: 0,
      Electrical: 0,
      Programming: 0,
      Official: 0
    };
    
    yearMembers.forEach(member => {
      if (member.division && counts.hasOwnProperty(member.division)) {
        counts[member.division]++;
      }
    });
    
    return counts;
  };

  const divisionCounts = calculateDivisionCounts();

  const divisions = [
    {
      name: 'Mechanical Division',
      key: 'Mechanical',
      description: 'Robot design, manufacturing, and mechanical systems',
      color: 'bg-robot-orange'
    },
    {
      name: 'Electrical Division', 
      key: 'Electrical',
      description: 'Circuit design, PCB development, and electronic systems',
      color: 'bg-tech-blue'
    },
    {
      name: 'Programming Division',
      key: 'Programming',
      description: 'Software development, AI algorithms, and robot control',
      color: 'bg-success-green'
    },
    {
      name: 'Official Division',
      key: 'Official',
      description: 'Project coordination, documentation, and team operations',
      color: 'bg-accent'
    }
  ].filter(division => divisionCounts[division.key] > 0); // Filter out divisions with 0 members

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Year Timeline Navigation - Desktop (Right Side) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center space-y-2">
          {years.map((year, index) => (
            <div key={year} className="relative group">
              <div
                onMouseEnter={() => setSelectedYear(year)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 cursor-pointer ${
                  selectedYear === year
                    ? 'bg-tech-blue text-white scale-110 shadow-lg' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {year}
              </div>
              {index < years.length - 1 && (
                <div className="w-0.5 h-8 bg-gray-300 mx-auto" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Year Timeline Navigation - Mobile (Bottom) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <div className="flex items-center space-x-3">
            {years.map((year, index) => (
              <React.Fragment key={year}>
                <button
                  onClick={() => setSelectedYear(year)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    selectedYear === year
                      ? 'bg-tech-blue text-white shadow-md scale-110' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {year}
                </button>
                {index < years.length - 1 && (
                  <div className="w-2 h-0.5 bg-gray-300" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Add padding bottom for mobile to prevent content being hidden behind navigation */}
      <div className="pt-16 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Meet the passionate engineers and innovators behind Bandhayudha's success
            </p>
          </div>
        </section>

        {/* Mentor Section - TAMBAHAN BARU */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mentor
              </h2>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://mesin.ft.undip.ac.id/wp-content/uploads/2018/02/Munadi-1.jpg"
                  alt="Dr. Munadi, S.T., M.T."
                  className="w-48 h-56 rounded-2xl object-cover shadow-lg mb-6"
                />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Dr. Munadi, S.T., M.T.
                </h3>
                <p className="text-lg text-tech-blue mb-6">
                  Team Director
                </p>
                <blockquote className="italic text-lg text-muted-foreground max-w-xl">
                  "Innovation distinguishes between a leader and a follower. In robotics, we don't just build machines, we create the future."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Key Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Leadership Team - {selectedYear}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The core team members who drive our vision and lead our technical initiatives
              </p>
            </div>

            {renderMembersGrid(filteredMembers)}
          </div>
        </section>

        {/* Divisions */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Team Divisions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our specialized divisions working together to create world-class robotics systems
              </p>
            </div>

            <div className={`grid md:grid-cols-2 ${divisions.length === 4 ? 'lg:grid-cols-4' : divisions.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6 max-w-6xl mx-auto`}>
              {divisions.map((division, index) => (
                <Card key={index} className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${division.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white">{divisionCounts[division.key]}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{division.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{division.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {divisionCounts[division.key]} Members
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Are you passionate about robotics and innovation? We're always looking for talented 
              individuals to join our mission of advancing robotics technology.
            </p>
            <div className="space-y-4">
              <p className="text-white">
                <strong>Open Positions:</strong> Mechanical Engineers, Electronics Engineers, 
                Software Developers, Project Coordinators
              </p>
              <p className="text-white">
                Contact us at <a href="mailto:bandhayudha.undip@gmail.com" className="underline hover:text-gray-200">
                  bandhayudha.undip@gmail.com
                </a> to learn more about joining our team.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

// Member Card Component
const MemberCard = ({ member }) => {
  return (
    <Card className="shadow-elevation-medium hover:shadow-elevation-high transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-elevation-medium"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center shadow-elevation-medium">
              <User className="h-12 w-12 text-gray-500" />
            </div>
          )}
          <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
          <p className="text-tech-blue font-semibold mb-2">{member.role}</p>
          <div className="flex flex-col items-center space-y-1 text-sm text-muted-foreground">
            <span>{member.department}</span>
            <span>{member.year}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {member.bio}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Skills</h4>
          <div className="flex flex-wrap gap-1">
            {member.skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-center space-x-3">
            <a
              href={`mailto:${member.contact.email}`}
              className="text-muted-foreground hover:text-tech-blue transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
            {member.contact.linkedin && (
              <a
                href={member.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {member.contact.github && (
              <a
                href={member.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tech-blue transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            {member.contact.phone}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Members;