import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled, { ThemeProvider } from "styled-components/native";
import {
  View,
  Switch,
  Text,
  FlatList,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ThemeToggleContext = createContext({
  toggleTheme: () => {},
  isDark: true,
});

const darkTheme = {
  background: "#1C202C",
  steamLogo: "#fff",
  card: "#202532",
  text: "#F5F5F5",
  subText: "#81838A",
  highlight: "#0A84FF",
  border: "#313743",
  accent: "#0A84FF",
  green: "#00C853",
  red: "#FF3B30",
};
const lightTheme = {
  background: "#FFFFFF",
  steamLogo: "#000",
  card: "#F0F0F0",
  text: "#000000",
  subText: "#444444",
  highlight: "#0A84FF",
  border: "#CCCCCC",
  accent: "#0A84FF",
  green: "#00C853",
  red: "#FF3B30",
};

const Tab = createBottomTabNavigator();

const Container = styled.View`
  background-color: ${(props) => props.theme.background};
  padding: 16px;
  padding-top: 20px;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`;

const SubText = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.subText};
`;

const FilterBar = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  min-height: 40px;
  padding-left: 8px;
  margin-vertical: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.TouchableOpacity`
  background-color: ${({ active }) => (active ? "#0A84FF" : "#ccc")};
  padding: 8px 16px;
  border-radius: 10px;
  margin-right: 10px;
  min-width: 50px;
  min-height: 40px;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
`;

const FilterText = styled.Text`
  color: ${({ active }) => (active ? "#fff" : "#000")};
  font-size: 15px;
  text-align: center;
`;

const PostCard = styled.View`
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const PostImage = styled.View`
  height: 300px;
  background-color: gray;
`;
const ProductImage = styled.View`
  width: 80px;
  height: 80px;
  background-color: gray;
  overflow: hidden;
  border-radius: 10px;
`;

const PostContent = styled.View`
  padding: 10px;
`;

const ChatItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.border};
`;

const Avatar = styled.View`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 20px;
  margin-right: 10px;
`;

const ChatInfo = styled.View`
  flex: 1;
`;

const ChatText = styled.Text`
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;

const SafetyCode = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.text};
  margin-vertical: 20px;
`;

const GameListItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const GameDetails = styled.View`
  flex: 1;
  padding-left: 12px;
`;

const GameText = styled.Text`
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 16px;
`;

const PlatformText = styled.Text`
  color: ${(props) => props.theme.subText};
  font-size: 14px;
`;

const GamePrice = styled.Text`
  color: ${(props) => props.theme.green};
  font-weight: bold;
  font-size: 16px;
`;

const StoreHeaderImage = styled.View`
  min-height: 250px;
  margin-bottom: 120px;
  width: 350px;
  margin-inline: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

const MenuItem = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.card};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;
const ProfileAvatar = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-self: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ThemeSwitcherContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const PostActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.border};
`;

const PostAction = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CentreTitleItems = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-block: 30px;
  align-items: center;
`;
const SearchIcon = styled(FontAwesome5)`
  margin-left: auto;
`;
const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const SwitchContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

const SwitchButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? "#0A84FF" : "#ccc")};
  margin-horizontal: 5px;
`;

const SwitchText = styled.Text`
  color: ${({ active, theme }) => (active ? "#fff" : theme.text)};
  font-weight: bold;
`;

const AvatarImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 12px;
`;

const GameTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Recommendation = styled.Text`
  margin: 8px;
  color: #fff;
  font-size: 14px;
`;

const DiscountPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

const Discount = styled.Text`
  color: #ff3b30;
  font-size: 18px;
  font-weight: bold;
`;

const Price = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Platform = styled.View`
  position: absolute;
  right: 30px;
  bottom: 20px;
`;

const PlatformIcon = styled(FontAwesome5)`
  color: #fff;
`;
const ProductContentPost = styled.View`
  background: rgba(0, 0, 0, 0.7);
  height: 150px;
  margin-top: 35%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const SteamSwitch = ({ selected, onSelect }) => {
  const options = ["Open chats", "My Friends"];
  const { isDark } = React.useContext(ThemeToggleContext);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <SwitchContainer>
      {options.map((option, index) => (
        <SwitchButton
          key={option}
          active={selected === index}
          onPress={() => onSelect(index)}
        >
          <SwitchText active={selected === index} theme={currentTheme}>
            {option}
          </SwitchText>
        </SwitchButton>
      ))}
    </SwitchContainer>
  );
};

const GuardSwitch = ({ selected, onSelect }) => {
  const options = ["Guard", "Confirmations"];
  const { isDark } = React.useContext(ThemeToggleContext);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <SwitchContainer>
      {options.map((option, index) => (
        <SwitchButton
          key={option}
          active={selected === index}
          onPress={() => onSelect(index)}
        >
          <SwitchText active={selected === index} theme={currentTheme}>
            {option}
          </SwitchText>
        </SwitchButton>
      ))}
    </SwitchContainer>
  );
};

const CommunityScreen = () => {
  const { isDark } = React.useContext(ThemeToggleContext);

  const posts = [
    {
      avatar: require("./assets/users/profile1.png"),
      username: "GamerOne",
      subtext: "Eurogamer • yesterday • 2:20pm",
      image: require("./assets/games/game4.png"),
      title:
        "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
    },
    {
      avatar: require("./assets/users/profile3.png"),
      username: "PixelMaster",
      subtext: "IGN • today • 11:00am",
      image: require("./assets/games/game3.png"),
      title: "New update brings major graphics overhaul to Cyberpunk 2077",
    },
  ];

  return (
    <Container>
      <TitleBlock title={"Community"} />
      <SubText>
        Community and official content for all games and software
      </SubText>
      <FilterBar>
        {["All", "Screenshots", "Artwork", "Workshop"].map((item, idx) => (
          <FilterButton key={item} active={idx === 0}>
            <FilterText active={idx === 0}>{item}</FilterText>
          </FilterButton>
        ))}
      </FilterBar>

      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PostCard>
            <PostHeader>
              <Image
                source={item.avatar}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    color: isDark ? "#fff" : "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.username}
                </Text>
                <SubText>{item.subtext}</SubText>
              </View>
            </PostHeader>

            <PostImage>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </PostImage>

            <PostContent>
              <Text
                style={{
                  color: isDark ? "#F5F5F5" : "#000",
                  fontWeight: "bold",
                  marginTop: 6,
                }}
              >
                {item.title}
              </Text>
            </PostContent>

            <PostActions>
              <PostAction>
                <FontAwesome5 name="thumbs-up" size={18} color="#0A84FF" />
                <Text style={{ marginLeft: 5, color: "#81838A" }}>
                  23 Likes
                </Text>
              </PostAction>
              <PostAction>
                <FontAwesome5 name="comment-alt" size={18} color="#81838A" />
                <Text style={{ marginLeft: 5, color: "#81838A" }}>
                  5 Comments
                </Text>
              </PostAction>
              <PostAction>
                <FontAwesome5 name="share" size={18} color="#81838A" />
              </PostAction>
            </PostActions>
          </PostCard>
        )}
      />
    </Container>
  );
};

const ChatScreen = () => {
  const chats = [
    {
      name: "Mark Dyson",
      preview: "I'm already starting to play",
      avatar: require("./assets/users/profile1.png"),
    },
    {
      name: "Player123",
      preview: "Ok",
      avatar: require("./assets/users/profile2.png"),
    },
    {
      name: "Player",
      preview: "Hello!",
      avatar: require("./assets/users/profile3.png"),
    },
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const { isDark } = React.useContext(ThemeToggleContext);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <Container>
      <TitleBlock title={"Chat"} />
      <SteamSwitch selected={selectedTab} onSelect={setSelectedTab} />

      <FlatList
        data={chats}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ChatItem>
            <AvatarImage source={item.avatar} />
            <ChatInfo>
              <ChatText style={{ color: currentTheme.text }}>
                {item.name}
              </ChatText>
              <SubText>{item.preview}</SubText>
            </ChatInfo>
          </ChatItem>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
  );
};

const TitleBlock = ({ title }) => {
  const { isDark } = React.useContext(ThemeToggleContext);
  const currentTheme = isDark ? darkTheme : lightTheme;
  return (
    <CentreTitleItems>
      <FontAwesome5
        name="steam"
        size={40}
        color={currentTheme.steamLogo}
        style={{ marginRight: 15 }}
      />
      <Title>{title}</Title>
      <SearchIcon name="search" size={20} color={currentTheme.text} />
    </CentreTitleItems>
  );
};

const SafetyScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <Container>
      <TitleBlock title={"Safety"} />
      <GuardSwitch selected={selectedTab} onSelect={setSelectedTab} />
      <SubText>Logged in as player</SubText>
      <SafetyCode>N5KCV</SafetyCode>
      <SubText>
        You'll enter your code each time you enter your password to sign in.
      </SubText>
      <View>
        <Text
          style={{
            color: "#54a5d4",
            fontSize: 14,
            lineHeight: 20,
          }}
        >
          Tip: If you don't share your PC, you can select "Remember my password"
          when you sign in to the PC client to enter your password and
          authenticator code less often.
        </Text>
      </View>
      <MenuItem>
        <GameText>Remove Authenticator</GameText>
      </MenuItem>
      <MenuItem>
        <GameText>My Recovery Code</GameText>
      </MenuItem>
      <MenuItem>
        <GameText>Help</GameText>
      </MenuItem>
    </Container>
  );
};

const StoreScreen = () => {
  const games = [
    {
      title: "Grand Theft Auto V",
      price: "$10",
      oldPrice: "$20",
      platform: "PC",
      image: require("./assets/games/game2.png"),
    },
    {
      title: "Battlefield 4™",
      price: "$35",
      platform: "PS4",
      image: require("./assets/games/game3.png"),
    },
    {
      title: "Factorio",
      price: "$7",
      platform: "PC",
      image: require("./assets/games/game6.png"),
    },
    {
      title: "Horizon Zero Dawn",
      price: "$38",
      platform: "PS5",
      image: require("./assets/games/game5.png"),
    },
  ];
  const posts = [
    {
      title: "Grand Theft Auto V",
      image: require("./assets/games/game2.png"),
      discount: "-40%",
      price: "$29.99",
      platform: "PC",
    },
    {
      title: "Battlefield 4™",
      image: require("./assets/games/game3.png"),
      discount: "-30%",
      price: "$35.00",
      platform: "PS4",
    },
    {
      title: "Factorio",
      image: require("./assets/games/game6.png"),
      discount: "-25%",
      price: "$7.00",
      platform: "PC",
    },
    {
      title: "Horizon Zero Dawn",
      image: require("./assets/games/game5.png"),
      discount: "-10%",
      price: "$38.00",
      platform: "PS5",
    },
  ];

  return (
    <Container>
      <TitleBlock title={"Store"} />
      <FlatList
        data={posts}
        horizontal
        renderItem={({ item }) => (
          <StoreHeaderImage>
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              resizeMode="cover"
            />
            <ProductContentPost>
              <GameTitle>{item.title}</GameTitle>
              <DiscountPrice>
                <Discount>{item.discount}</Discount>
                <Price>{item.price}</Price>
              </DiscountPrice>
              <Recommendation>Recommended by your friend</Recommendation>
            </ProductContentPost>

            <Platform>
              <PlatformIcon name="windows" size={20} color="#fff" />
            </Platform>
          </StoreHeaderImage>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <FilterBar>
        {["Top seller", "Free to play", "Early access", "Most played"].map(
          (item, idx) => (
            <FilterButton key={item} active={idx === 0}>
              <FilterText active={idx === 0}>{item}</FilterText>
            </FilterButton>
          )
        )}
      </FilterBar>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameListItem>
            <ProductImage>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </ProductImage>
            <GameDetails>
              <GameText>{item.title}</GameText>
              <PlatformText>{item.platform}</PlatformText>
            </GameDetails>
            <GamePrice>{item.price}</GamePrice>
          </GameListItem>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingRight: 20,
        }}
      />
    </Container>
  );
};

const ProfileScreen = () => {
  const { toggleTheme, isDark } = React.useContext(ThemeToggleContext);
  return (
    <Container>
      <ProfileAvatar>
        <Image
          source={require("./assets/users/profile1.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </ProfileAvatar>
      <Title style={{ textAlign: "center", fontSize: 18 }}>
        Firstname Lastname
      </Title>
      <SubText style={{ textAlign: "center", marginBottom: 20 }}>Group</SubText>
      <MenuItem>
        <GameText>Settings</GameText>
      </MenuItem>
      <MenuItem>
        <GameText>Logout</GameText>
      </MenuItem>
      <ThemeSwitcherContainer>
        <Text style={{ color: isDark ? "#F5F5F5" : "#000" }}>Switch Theme</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </ThemeSwitcherContainer>
    </Container>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={currentTheme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                const icons = {
                  Community: "steam",
                  Chat: "comments",
                  Safety: "shield-alt",
                  Store: "store",
                  Profile: "user",
                };
                return (
                  <FontAwesome5
                    name={icons[route.name] || "circle"}
                    size={size}
                    color={color}
                  />
                );
              },
              tabBarStyle: {
                backgroundColor: currentTheme.card,
                borderTopColor: currentTheme.border,
              },
              tabBarActiveTintColor: currentTheme.highlight,
              tabBarInactiveTintColor: currentTheme.subText,
              headerShown: false,
            })}
          >
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Safety" component={SafetyScreen} />
            <Tab.Screen name="Store" component={StoreScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
